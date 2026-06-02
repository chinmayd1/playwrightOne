
import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://conduit.bondaracademy.com/')
    await page.getByText('Sign in').click()
    await page.locator('[type="text"]').fill("minskoleopc@gmail.com")
    await page.locator('[type="password"]').fill("minskole123")
    await page.locator('button').click()
})

test('delete the article testcase', async ({ page ,request}) => {
    // call the login api to get the token 
    let response  = await request.post('https://conduit-api.bondaracademy.com/api/users/login',{
        data:{"user":{"email":"minskoleopc@gmail.com","password":"minskole123"}}
    });
    let reponseBody = await response.json()
    console.log(reponseBody)
    const accesstoken = reponseBody.user.token
    // using the token create the article 

    let responseArticle = await request.post('https://conduit-api.bondaracademy.com/api/articles/',{
        data:{"article":{"title":"New Minksole article","description":"This is description of new article created","body":"This body of minskole","tagList":["dasd"]}},
        headers:{
            Authorization:`Token ${accesstoken}`
        }
    });
    expect(responseArticle.status()).toEqual(201)
    // on the ui delete the article 
    await page.getByText('Global Feed').click()
    await page.getByText('New Minksole article').click()
    await page.locator('button').first().click()
    await page.getByText('Global Feed').click()
    // validate the article is deleted
    await expect(await page.locator('h1').nth(1)).not.toContainText('New Minksole article')

});
