// xpath
// css selector
// id
//  getByText()
//  getByRole()
//  getByLabel()
//  getByPlaceholder()

// @ts-check
import { test, expect } from '@playwright/test'

test.only('verify header', async ({ page }) => {
    // Element selection method

    // first()
    // last()
    // nth()
    // filter()
    // locator()
    // and()
    // or()
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator('input[type="radio"]').first().check()
    await page.locator('input[type="radio"]').last().check()
    await page.locator('input[type="radio"]').nth(1).check()
    await page.locator('#product').first().locator("tr").filter({hasText:" Total Amount Collected: 296 "})
    await page.locator('#product').first().locator("tr").filter({has:page.locator('td')})

})