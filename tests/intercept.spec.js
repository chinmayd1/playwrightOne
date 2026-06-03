
import { test, expect } from '@playwright/test';

test('intercept -- waiting for API request and validation on UI', async ({ page }) => { 
    // listerner
    const reponsePromise = page.waitForResponse(response => response.url().includes('api/tags') && response.status() == 200);
    await page.goto('https://conduit.bondaracademy.com/')
    let reponseBody = await reponsePromise;
    let response = await reponseBody.json()
    let tagArray = response.tags
    let textUI = await page.locator('body > app-root > app-home-page > div > div > div > div.col-md-3 > div > p~div a').allTextContents()
    console.log(tagArray)
    console.log(textUI)
    tagArray.forEach(function(el,index){
        expect(el).toEqual(textUI[index].trim())
    })

});
