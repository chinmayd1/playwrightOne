// @ts-check
import { test, expect } from '@playwright/test'

test('check title for page', async ({ page }) => {
    // Arrangement
    await page.goto("https://playwright.dev/")
    // Assertion
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')
})


