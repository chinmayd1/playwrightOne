import { test, expect } from './fixtures/baseTest2';

test.only('Element state methods', async ({ page,loginIn ,dashboard}) => {
    await loginIn.login("student","Password123")
    await dashboard.getLoginSuccess()
    await dashboard.logOutFunction()
});