import { test, expect } from '@playwright/test'
test.only('Element state methods', async ({ page }) => {

    //  toBeVisible() ->  visible on DOM / not visible DOM
    //  dashboard navigation 
    //  interaction of element
    //  CRUD --> create , update , add , delete

    // await expect('#name').toBeVisble()


    // toBeHidden() -> not visible on DOM
    // CRUD --> create , update , add , delete
    // https://www.htmlelements.com/demos/dropdownlist/auto-complete/
    //await expect('#name').toBeHidden()


    // toHaveText()
    // <h1>Hello</h1>
    // await expect(page.locator('h1)).toHaveText("Hello")

    // toContainText() // substring
    // <h1>Hello World</h1>
    // await expect(page.locator('h1)).toContainText("world")

    // toHaveValue()
    // -------------------------
            //chinmay
    // -------------------------
    // await page.locator('#name').fill('Rahul')
    // await expect( page.locator('#name')).toHaveValue('Rahul')

    // // toHaveAttribute()
    // ele = await page.locator('#autocomplete')
    // await expect(ele).toHaveAttribute('placeholder','Type to Select Countries')

    // toBeChecked()

    // radio button and checkbox

    await page.locator('#checkBox').check()
    await expect(await page.locator('#checkBox')).toBeChecked()

    await page.locator('#radioButton').check()
    await expect(await page.locator('#radioButton')).toBeChecked()

    // not.toBeChecked()
    await page.locator('#checkBox').uncheck()
    await expect(await page.locator('#checkBox')).not.toBeChecked()

    // toHaveCount()
    await expect(page.locator('input[type="radio"]')).toHaveCount(3)

    // toHaveUrl()
    await expect(page).toHaveUrl('minskole')

















    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")



   

});