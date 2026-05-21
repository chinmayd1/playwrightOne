import { test as base } from '@playwright/test'
import { LoginPage3 } from '../pages/LoginPage3';
import { DashboardPage } from '../pages/DashboardPage';

export const test = base.extend({
    loginIn: async ({ page }, use) => {
        let loginPage = new LoginPage3(page)
        await loginPage.goto()
        await use(loginPage)
        // after the test run
    },
    dashboard: async ({ page }, use) => {
        let dashboard = new DashboardPage(page)
        await use(dashboard)
        // after the test run
    }
})

export { expect } from "@playwright/test"
