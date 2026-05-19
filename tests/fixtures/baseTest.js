// avoid repeat code
// reuse of login / setup
// inject page Obects
// manage testdata/resources

import {test as base} from '@playwright/test'
//const {LoginPage2} = require('../pages/LoginPage2')
import {LoginPage2} from '../pages/LoginPage2';

export const test = base.extend({
    loginIn:async({page},use)=>{
        let loginPage = new LoginPage2(page)
        await loginPage.goto()
        await use(loginPage)
        // after the test run
    }
})

export {expect} from "@playwright/test"
