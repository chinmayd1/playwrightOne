
import { test, expect } from './fixtures/baseTest2';
import user from '../tests/testdata/testdatasametc.json';
// different dataset for same testcase
user.forEach(function (el) {
    test.only(`Element state methods -${el.testcase}`, async ({ page, loginIn, dashboard }) => {
        await loginIn.login(el.username, el.password)
        await dashboard.getLoginSuccess()
        await dashboard.logOutFunction()
    });


})


