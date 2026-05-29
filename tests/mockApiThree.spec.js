
import { test, expect } from '@playwright/test';
import tags from '../tests/testdata/tags.json'

test('has title', async ({ page }) => {
    console.log(tags)
    await page.route('**/api/tags', async (route)=>{
        await route.fulfill({
            body:JSON.stringify(tags)
        })
    })
    await page.goto('https://conduit.bondaracademy.com/')
    await page.waitForTimeout(5000)
    await  expect(page.locator('.navbar-brand')).toHaveText('conduit')
});
