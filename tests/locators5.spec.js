import { test, expect } from '@playwright/test'
test.only('Element state methods', async ({ page }) => {

    // click()
    // dbclick()
    // clear()
    // fill()
    // press()
    // hover()
    // check()
    // uncheck()
    // selectOption()
    // scrollIntoViewIfNeeded()
    // screenshot()
    
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    // click()
    // let openwindowButton = await page.locator('#openwindow')
    // await openwindowButton.click()

    // dblclick()
    // let opentabButton = await page.locator('#opentab')
    // await opentabButton.dblclick()

    // fill()
    // let inputE = await page.locator('#autocomplete')
    // await inputE.fill('india')

    // type()
    // let inputEType = await page.locator('#autocomplete')
    // await inputEType.type('in')
    
    // press()
    let inputEType = await page.locator('#autocomplete')
    await inputEType.fill('Ar')
    await inputEType.press('ArrowDown')
    await inputEType.press('Enter')

});