// import { test, expect } from '@playwright/test'

// test('check title for page', async ({ page }) => {
//     // Arrangement
//     await page.goto("https://playwright.dev/")
//     // Assertion
//     await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')

//     // page is a fixture

//     // if page is not used as fixture ---->
//     // launch the browser
//     // creates context --- local storage , cookies ,session
//     // open the tab  --  opening the tab
//     // give tab to your test --> test ---> page

//     // const browser= await chromium.launch();
//     // const context = await browser.newContext();
//     // const page =    await context.newPage();

//     // advantages ---> 

//     //  reduce repeated code 
//     //  improve framework
//     //  provide  reuable setup 
//     //  support scalability


//     // what is page fixtures ?
//     // represents browser tab 
//     // web page 
//     // active UI screen 

//     //await page.goto()
//     //---> Launch browser ====> create context ====> Open tab / page  ====> provide page fixture
//     // Chrome ==> newTab ===> url launch

//     //page.goto()
//     //page.locator()
//     //page.click()
//     //page.fill()
//     //page.reload()
//     //page.goBack()
//     //page.screenshot()

//     // Broswer

//     // manages entire browser application
//     // Example ----> 
//     // Chrome 
//     // Edge
//     // Firefox






// })

// test('check title for broswer fixture', async ({ browser }) => {
//     // broswer   
//     // context 
//     // page
//     let page1 = await browser.newPage()
//     let page2 = await broswer.newPage()
//     page1.goto('https://www.google.com') // admin
//     page2.goto('https://www.facebook.com') // user
// })


// test('check title for broswer fixture', async ({ browser }) => {
//     // broswer   
//     // context 
//     // page
//     let page1 = await browser.newPage()
//     let page2 = await broswer.newPage()
//     page1.goto('https://www.google.com') // admin
//     page2.goto('https://www.facebook.com') // user
// })

// // browser  ---> page1 and page2
// // browser ---> context ---> browser -user1   ---> browser --- user2
// // cookies ---> local storage ---> sessions ---> authentication


// //  userid password ----> authenticate ----> token -----> localstorage  / cookies


// // Broswe fixture and methods 


// // Context 
// test('check title for broswer fixture', async ({ browser }) => {
//     // broswer   
//     // context 
//     // page
//     let mode1 = await browser.newContext()
//     let mode2 = await browser.newContext()
    
//     let page1 = mode1.newPage()
//     let page2 = mode2.newPage()

//     //cookies ---> local storage ---> sessions ---> authentication

//     //Browser ---> Context ----> Page


// })


// // custiomized fixture
