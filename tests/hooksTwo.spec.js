import { test, expect ,broswer } from '@playwright/test'
test.describe('login module 4', () => {

    // runs once before all testcases
    test.beforeAll(async function(){
        console.log("db connected")
    })
    // runs once after all testcase
    test.beforeEach(async function(){
        console.log("i will run before each testcase")
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    })
    
    test('Login with valid credenitals 4', async ({ page }) => {
        console.log("test case one run")
    })
    test('Login with invalid credentials 4', async ({ page }) => {
        console.log("test case two run")
    })

     test.afterEach(async function(){
        console.log("close the broswer")
    
    })

    test.afterAll(async function(){
        console.log("db disconnected")
    })
})