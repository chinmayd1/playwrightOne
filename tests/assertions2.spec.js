import { test, expect } from '@playwright/test'
test.only('Element state methods', async ({ page }) => {

    // to HaveURL and toHaveTitle()
    // await page.goto("https://sauce-demo.myshopify.com/")
    // //Click on login link
    // await page.locator('#customer_register_link').click()
    // await expect(page).toHaveTitle("Account – Sauce Demo")
    // await expect(page).toHaveURL("https://sauce-demo.myshopify.com/account/login")

     await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_button_disabled")
     let bodyContent = await page.frameLocator('#iframeResult')
     let buttonOne = await bodyContent.locator('button[type="button"]')
     await expect(buttonOne).toBeDisabled()
     await expect(await page.locator('#runbtn')).toBeEnabled()



    
});