import { test, expect } from './fixtures/baseTest2';

test('Element state methods', async ({ page,loginIn ,dashboard,testData}) => {
    await loginIn.login(testData.username,testData.password)
    await dashboard.getLoginSuccess()
    await dashboard.logOutFunction()
});