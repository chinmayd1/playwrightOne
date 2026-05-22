import { test as base } from '@playwright/test'
import { LoginPage3 } from '../pages/LoginPage3';
import { DashboardPage } from '../pages/DashboardPage';
import testData2 from "../../tests/testdata/testdata.json"

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
    },
    testData:async({},use)=>{
        const data = {
            username:"student",
            password:"Password123"
        }
        await use(data)
    }
})

export { expect } from "@playwright/test"
