import { test, expect } from '@playwright/test'
const {LoginPage} = require('../tests/pages/LoginPage')

test('Element state methods', async ({ page }) => {
    let loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.login("student","Password123")
    await loginPage.getLoginSuccess()
    
});
// This POM test case 