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
    //<input id="name" name="enter-name" class="inputs" placeholder="Enter Your Name" type="text">= action - fill
    
    // CSS selector
    // tagName[attribute='value']
    // Xpath 
    // //[@attribute='value']

    // id - 
    await page.locator('#name')
    await page.locator('input[name="enter-name"]')
    await page.locator('//input[@name="enter-name"]')
    await page.locator('input[placeholder="Enter Your Name"]')
    await page.locator('//input[@placeholder="Enter Your Name"]')
    await page.getByPlaceholder('Enter Your Name')

    // <label for="radio1"><input value="radio1" name="radioButton" class="radioButton" type="radio"> Radio1</label> action -check()
    await page.getByLabel('Radio1')
    await page.getByLabel('Radio2')
    await page.getByLabel('Radio3')
    await page.locator('input[value="radio1"]')
    // assertion
    await expect(page.locator('input[value="radio1"]')).toBeChecked()


    // getByText()/ GetByRole()
    await page.getByText('Open Window')

    // button , checkox , heading , link , listitem , textbox
    await page.getByRole('button',{name:"Open Tab"}).click()
    await page.getByRole('checkbox',{name:"Option1"}).check()
    const mainHeading = await page.getByRole('heading',{name:"Practice Page"})
    await expect(mainHeading).toBeVisible()


    









    
    

})