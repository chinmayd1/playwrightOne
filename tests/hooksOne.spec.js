
// test()
// test.only()
// test.skip()
// test.fixme()
// test.fail()
// test.slow()

// test.describe()
// test.describe.only()
// test.describe.skip()

// beforeAll()
// afterAll()
// afterEach()
// beforeEach()

// program 1 

import { test, expect } from '@playwright/test'


// test('Login testcase ',async({page})=>{
//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
// })

// runs only this testcase , useful for debugging
// test.only('Login testcase two',async({page})=>{
//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
// })

// this testcase will be skipped
// test.skip('Login testcase three ',async({page})=>{
//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
// })

// test('Login testcase four',async({page})=>{
//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
// })

// it will be marked as broken testcase
// test.fixme('Login testcase five WIP',async({page})=>{
//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
// })

// Expected failure
// It test fails , consider as pass in playwright 
test.fail('Login testcase six WIP', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(2).toBe(3)
})

// Marks test case as slow , so playwright increases timeout
test('Login testcase seven', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    test.slow();
})


// login 

test.describe('login module', () => {
    test('Login with valid credenitals', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    })
    test('Login with invalid credentials', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')  
    })
})

// only runs this module
// test.describe.only('login module 2', () => {
//     test('Login with valid credenitals 2', async ({ page }) => {
//         await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
//     })
//     test('Login with invalid credentials 2', async ({ page }) => {
//         await page.goto('https://rahulshettyacademy.com/AutomationPractice/')  
//     })
// })


test.describe.skip('login module 3', () => {
    test('Login with valid credenitals 3', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    })
    test('Login with invalid credentials 3', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')  
    })
})

test.describe('login module 4', () => {
    test('Login with valid credenitals 4', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    })
    test('Login with invalid credentials 4', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')  
    })
})

