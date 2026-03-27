// @ts-check
import { test, expect } from '@playwright/test'

test('verify header', async ({ page }) => {
    
    // tc1 
    // Arrangement
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    // locator 
    // input[id ="input_firstName"]



    // id 
    // getByLabel()
    // getByPlaceholder()
    // getByText()/ GetByRole()
    // CSS
    // Xpath
    // nth

    // program 1
    //<input id="name" name="enter-name" class="inputs" placeholder="Enter Your Name" type="text">
    
    // CSS selector
    // tagName[attribute='value']
    // Xpath 
    // //[@attribute='value']

    // id
    await page.locator('#name')
    await page.locator('input[name="enter-name"]')
    await page.locator('//input[@name="enter-name"]')
    await page.locator('input[placeholder="Enter Your Name"]')
    await page.locator('//input[@placeholder="Enter Your Name"]')
    await page.getByPlaceholder('Enter Your Name')











    
    

})