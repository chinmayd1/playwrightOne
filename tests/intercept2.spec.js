
import { test, expect } from '@playwright/test';

test.only('intercept2 -- waiting for API request and validation on UI', async ({ page,request}) => { 
    

    // ui login 
    await page.goto('https://conduit.bondaracademy.com/')
    await page.getByText('Sign in').click()
    await page.locator('[type="text"]').fill("minskoleopc@gmail.com")
    await page.locator('[type="password"]').fill("minskole123")
    await page.locator('button').click()


    const reponsePromise = page.waitForResponse(response => response.url().includes('api/articles') && response.status() == 201);

    // new article via UI 
    await page.getByText(' New Article ').click()
    await page
    .getByPlaceholder('Article Title')
    .fill('chinmay');
    await page
    .getByPlaceholder("What's this article about?")
    .fill('About playwright intercept');
    await page
    .getByPlaceholder('Write your article (in markdown)')
    .fill('Writing about how to make call');
    
    await page.getByRole('button',{name:' Publish Article '}).click()
    await page.waitForTimeout(2000)

     // article slug -id - intercept
    let reponseBody = await reponsePromise;
    let response = await reponseBody.json()
    let slugId = response.article.slug


    // article delete using slug id via - api (not deleting via UI)- API -- token
    let response2  = await request.post('https://conduit-api.bondaracademy.com/api/users/login',{
        data:{"user":{"email":"minskoleopc@gmail.com","password":"minskole123"}}
    });
    let reponseBody2 = await response2.json()
    console.log(reponseBody2)
    const accesstoken = reponseBody2.user.token


    let responseArticle = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${slugId}`,{
        headers:{
            Authorization:`Token ${accesstoken}`
        }
    });
    // validation

});