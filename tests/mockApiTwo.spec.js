
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.route('**/api/tags', async (route)=>{
        await route.fulfill({
            body:JSON.stringify({
                "tags": [
                    "Minskole",
                    "Playwright",
                ]
            })
        })
    })
    await page.goto('https://conduit.bondaracademy.com/')
    await page.waitForTimeout(5000)
    await  expect(page.locator('.navbar-brand')).toHaveText('conduit')

});
