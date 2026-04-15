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
    // let inputEType = await page.locator('#autocomplete')
    // await inputEType.fill('Ar')
    // await inputEType.press('ArrowDown')
    // await inputEType.press('Enter')

    // checkbox
    let checkBoxOne = await page.locator('#checkBoxOption1')
    let checkBoxTwo = await page.locator('#checkBoxOption2')
    let checkBoxThree = await page.locator('#checkBoxOption3')
    //await checkBoxOne.click()
    await checkBoxOne.check()
    await checkBoxTwo.check()
    await checkBoxThree.check()
    let expectedValue = await checkBoxOne.isChecked()
    await expect(expectedValue).toBeTruthy()

    await checkBoxOne.uncheck()
    let expectedValue2 = await checkBoxOne.isChecked()
    await expect(expectedValue2).toBeFalsy()
    await checkBoxTwo.uncheck()
    await checkBoxThree.uncheck()
    
    // radio button
    let radioButtonOne = await page.locator("input[value='radio1']")
    let radioButtonTwo = await page.locator("input[value='radio2']")
    await radioButtonOne.check()
    let expectedValue3 = await checkBoxOne.isChecked()
    await expect(expectedValue3).toBeTruthy()
    let expectedValue4 = await radioButtonTwo.isChecked()
    await expect(expectedValue4).toBeFalsy()
    
    // drop down 
    let selectDropDown = await page.locator('#dropdown-class-example')
    await selectDropDown.selectOption('option1'); // value / index / Text
    
    let hoverElement = await page.locator('#mousehover')
    hoverElement.hover()

    

});