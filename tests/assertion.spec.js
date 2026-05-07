import { test, expect } from '@playwright/test'
test.only('Element state methods', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    //toBeVisible()
    let inputText = await page.locator('#name')
    await expect(inputText).toBeVisible()

    // toBeHidden()
    let topLink  = await page.locator('a[href="#top"]')
    await expect(topLink).toBeHidden()

    // toHaveValue()
    await inputText.fill("rahul")
    await expect(inputText).toHaveValue('rahul')

    // toHaveValue() - 2
    let firstRadioButton = await page.locator('input[type="radio"]').first()
    let secondtRadioButton = await page.locator('input[type="radio"]').nth(1)
    await expect(firstRadioButton).toHaveValue('radio1')

    //toHaveAttribute 
    //toHaveClass
    await expect(firstRadioButton).toHaveAttribute('name',"radioButton")
    await expect(firstRadioButton).toHaveClass('radioButton')

    //toBeChecked()
    await firstRadioButton.check()
    await expect(firstRadioButton).toBeChecked()
    await expect(secondtRadioButton).not.toBeChecked()

    let radioButtons = await page.locator('input[type="radio"]')
    await expect(radioButtons).toHaveCount(3)

});