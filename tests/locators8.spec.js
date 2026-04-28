import { test, expect } from '@playwright/test'
test.only('Element state methods', async ({ page }) => {

    // Element info methods 

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    // const frame = page.frameLocator('#courses-iframe');
    // let frameText = await frame.locator('h2').first().innerText()
    // console.log(frameText)

    // element in iframe
    //let elementFrame = await page.locator('h2').first()    
    //console.log(elementFrame.textContent())

    // frame object --- content frame
    //    let iframeElement =  page.locator('#courses-iframe')
    //    const frame = await iframeElement.contentFrame()
    //    console.log(frame)

    //evalute()

    let e = await page.locator('#name').evaluate((el) => el.tagName)
    console.log(e)




});