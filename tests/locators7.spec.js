import { test, expect } from '@playwright/test'
test.only('Element state methods', async ({ page }) => {

    // Element info methods 
    
    //count()
    //allTextContents() - includes hidden text
    //allInnerTexts() - based on what is visible on UI
    //textContent() - single element
    //innerText() - innerText
    //getAttribute()
    //boundingBox()
    // Arrangement
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // Action
    let count = await page.locator('input[type=radio]').count()
    // Assertion
    expect(count).toBe(3)

    // program 2
    //allTextContents() 
    let rows = await page.locator('#product').first().locator('th').allTextContents()
    console.log(rows)
    expect(rows.length).toBeGreaterThan(1)
    expect(rows[0]).toContain('Instructor')

    // allInnerTexts()
    let rows2 = await page.locator('#product').nth(1).locator('tr').allInnerTexts()
    let rows3 = await page.locator('#product').nth(1).locator('tr').allTextContents()
    // console.log(rows2)
    // console.log(rows3)
    expect(rows2[rows2.length-1]).toContain("Smith")

    // textContent()
    let text = await page.locator('h1').textContent()
    console.log(text)
    expect(text).toContain("Practice")
    // login =====> accno ---> package ---> claim ---> portal 
    // claim =====> 123  ====> add

    // innerText()
    let text2 = await page.locator('h1').innerText()
    console.log(text2)
    expect(text).toContain("Page")

    //inputText()
    //document.querySelector("#autocomplete").value
    let countryName = "india"
    await page.locator('#autocomplete').fill(countryName)
    let text3 = await page.locator('#autocomplete').inputValue()
    console.log(text3)
    expect(text3).toBe(countryName)

    // getAttribute()

    let text4 = await page.locator('#autocomplete').getAttribute('placeholder')
    console.log(text4)

    // <h1 display= "none">heading</h1>
    // <h1 display= "block">heading</h1>






});