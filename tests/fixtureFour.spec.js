import { test, expect } from '../tests/fixtures/baseTest';


test('Element state methods', async ({ page,loginIn }) => {
    await loginIn.login("student","Password123")
    await loginIn.getLoginSuccess()
    
});