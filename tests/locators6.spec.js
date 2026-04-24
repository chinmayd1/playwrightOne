import { test, expect } from '@playwright/test'
test('Element state methods', async ({ page }) => {

    // Element info methods 
    // <h1 id = "one" name = "nm">Heading</h1>
    //<ul>
    //  <li>apple</li>
    //  <li>Mango</li>
    //  <li>Banana</li>
    //</ul>

    //count()
    //allTextContents() - includes hidden text
    //allInnerTexts() - based on what is visible on UI
    //textContent() - single element
    //innerText() - innerText
    //getAttribute()
    //boundingBox()
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    //let radioCount = await page.locator('input[type="radio"]').count()
    // assertion add
    const texts = await page.locator('#product').first().locator('th').allTextContents()
    console.log(texts)
    const texts2 = await page.locator('#product').last().locator('th').allTextContents()
    console.log(texts2)
    //allInnerTexts()
    let text3 = await page.locator('label').allInnerTexts()
    console.log(text3)



});