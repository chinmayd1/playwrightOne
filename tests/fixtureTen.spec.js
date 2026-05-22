import { test, expect } from './fixtures/baseTest2';

test.only('Element state methods', async ({ page,loginIn ,dashboard,testData2}) => {
    let data = testData2.TestCase-BAU-125
    await loginIn.login(testData.username,testData.password)
    await dashboard.getLoginSuccess()
    await dashboard.logOutFunction()
});