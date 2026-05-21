import { test, expect } from '@playwright/test'
const {LoginPage} = require('../tests/pages/LoginPage')
const {Dashboard} = require('../tests/pages/DashboardPage')
let loginPage;
let dashboard;

test.beforeEach(async({page})=>{
    loginPage = new  LoginPage(page)
    dashboard = new  Dashboard(page)

    await loginPage.goto()
})

test('Element state methods one valid credentials', async ({ page }) => {
    await loginPage.login("student","Password123")
    await loginPage.getLoginSuccess()
});

test('Element state methods two valid invalid credentials', async ({ page }) => {
    await loginPage.login("student","Password1234")
    await loginPage.getLoginSuccess()
});

