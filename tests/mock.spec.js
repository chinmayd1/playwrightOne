import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {

    await page.route('**/api/tags', async route => {

        await route.fulfill({
            status: 200,
            contentType: "application/type",
            body: JSON.stringify({
                "tags": [
                    "Minskole",
                    "Playwright",
                ]
            })
        })

    })

    await page.goto('https://conduit.bondaracademy.com/')
    await page.waitForTimeout(5000)
});
