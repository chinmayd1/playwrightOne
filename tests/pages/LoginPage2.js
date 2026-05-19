
// Class --> Properties and Methods ----> Properties --locators ---- methods - actions
import { test, expect } from '@playwright/test'
class LoginPage2 {

    constructor(page){
        this.page = page;
        // locators 
        this.username = '#username'
        this.password = '#password'
        this.submit = '#submit'
        this.loginMsg = '.post-title'
    }

    async goto(){
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    async login(username,password){
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.submit).click()
    }

    async getLoginSuccess(){
        let successMsg = await this.page.locator(this.loginMsg )

    }

}
module.exports = {LoginPage2};