import { test, expect } from '@playwright/test'

test('check title for page', async ({ page,browser }) => {
    // Arrangement
    await page.goto("https://playwright.dev/")
    // Assertion
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')

    // page is a fixture

    // if page is not used as fixture ---->
    // launch the browser
    // creates context 
    // open the tab
    // give tab to your test

    // const browser= await chromium.launch();
    // const context = await browser.newContext();
    // const page =    await context.newPage();

    // advantages ---> 

    //  reduce repeated code 
    //  improve framework
    //  provide  reuable setup 
    //  support scalability


    // what is page fixtures ?
    // represents browser tab 
    // web page 
    // active UI screen 

    //await page.goto()
    //---> Launch browser ====> create context ====> Open tab / page  ====> provide page fixture
    // Chrome ==> newTab ===> url launch

    //page.goto()
    //page.locator()
    //page.click()
    //page.fill()
    //page.reload()
    //page.goBack()
    //page.screenshot()

    // Broswer

    // manages entire browser application
    // Example ----> 
    // Chrome 
    // Edge
    // Firefox

    






})
