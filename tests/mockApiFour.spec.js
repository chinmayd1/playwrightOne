
import { test, expect } from '@playwright/test';
import tags from '../tests/testdata/tags.json'
let responseBody;
test('has title', async ({ page }) => {
    //console.log(tags)
    await page.route('**/api/articles*', async (route)=>{
       let response = await route.fetch();
       responseBody = await response.json()
       responseBody.articles[0].title  = "This is chinmay's article"
       responseBody.articles[0].description  = "Learning to update the api reponse"
       await route.fulfill({
        body:JSON.stringify(responseBody)
       })
    })
    await page.goto('https://conduit.bondaracademy.com/')
    await  expect(page.locator('.navbar-brand')).toHaveText('conduit')
    await expect(await page.locator('h1').nth(1)).toHaveText("This is chinmay's article")
    await expect(await page.locator('app-article-list p').first()).toHaveText("Learning to update the api reponse")

    //console.log(responseBody)
});
