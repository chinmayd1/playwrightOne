import { test, expect } from '@playwright/test';

// Broswer ---> Context -----> Page

test('Page fixture example', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('#name').fill("Rahul")
})
test('Browser fixture example', async ({ browser }) => {
    let page = browser.newPage()
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('#name').fill("Rahul")


    let page2 = browser.newPage()
    await page2.goto('https://www.google.com')
    // multiple tabs , mutiple windows , advanced controls

})

test('context fixture example', async ({ context }) => {
    // cookies , local storage , sessions, authentication
    let page = context.newPage()
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('#name').fill("Rahul")
    
})

// request
test('request fixture - GET API call',async ({request})=>{
   let response = await request.get('https://jsonplaceholder.typicode.com/posts/1')
   expect(response.status()).toBe(200)
})

// broswerName

test("Page fixture example", async ({ page ,browserName}) => {
    test.skip(browserName === "firefox")
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('#name').fill("Rahul")
})
