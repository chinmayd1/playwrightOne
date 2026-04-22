
// Element state methods

// isVisible()
// isHidden()
// isChecked()
// isEnabled()
// isDisabled()
// waitFor()

import { test, expect } from '@playwright/test'

test('Element state methods', async ({ page }) => {

    // await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // let headOne = await page.locator('h1')
    // let expectedValue = await headOne.isVisible();
    // await expect(expectedValue).toBeTruthy()

    //DOM - element availble'

    // await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // let headTwo = await page.locator('h1')
    // let expectedValue2 = await headOne.isHidden();
    // await expect(expectedValue2).toBeTruthy()

    // radio , checkbox  -  isChecked()


    // await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // let radioButtonOne = await page.locator("input[value='radio1']")
    // let expectedValue3 = await radioButtonOne.isChecked()
    // await expect(expectedValue3).toBeFalsy()
    // await radioButtonOne.click()
    // expectedValue3 = await radioButtonOne.isChecked()
    // await expect(expectedValue3).toBeTruthy()


    // await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // let checkBoxOne = await page.locator("input[value='option1']")
    // let expectedValue4 = await checkBoxOne.isChecked()
    // await expect(expectedValue4).toBeFalsy()
    // await checkBoxOne.click()
    // expectedValue4 = await checkBoxOne.isChecked()
    // await expect(expectedValue4).toBeTruthy()

    // await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // let buttonOpenWindow = await page.locator('#openwindow')
    // let result = buttonOpenWindow.isDisabled()
    // await expect(result).toBeFalsy()

    // await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // let buttonOpenWindowB = await page.locator('#openwindow')
    // let resultB = buttonOpenWindowB.isEnabled()
    // await expect(resultB).toBeTruthy()

  
    // static waits and dynamic waits 
    //thread.sleep(2000)
    // dynamic wait()
    // explicit and implicit
    // element  and overall script
    // explicit --- 5   ---- element ---> 2 
    // implicit ---5  ----  element ----> 2
    

    // await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // let hideButton = page.locator('#hide-textbox')  
    // let showButton = page.locator('#show-textbox')
    // let  displayTextInput = page.locator('#displayed-text')  
    // showButton.click()
    // displayTextInput.waitFor({state:'visible'})
    // hideButton.click()
    // displayTextInput.waitFor({state:'hidden'})



  




})