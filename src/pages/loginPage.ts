import { expect, Page } from "@playwright/test";
// import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers.ts";

export default class LoginPage {
    // private base: PlaywrightWrapper
    constructor(private page: Page){
        // this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        usernameInput : "(//div[contains(@class,'textfield__container relative')]//input)[1]",
        passwordInput : "(//input[contains(@class,'w-full h-9')])[2]",
        loginBtn : "//button[normalize-space(text())='Login']",
    }

    async navigateToLoginPage(){
        // await this.base.goto("https://qa.mygo.gorentals.com/");
    }

    async enterUserName(user: string){
        await this.page.locator(this.Elements.usernameInput).fill(user)
    }

    async enterPassword(password: string){
        await this.page.locator(this.Elements.passwordInput).fill(password)
    }

    async clickLoginButton(){
        // await this.base.waitAndClick(this.Elements.loginBtn);
    }

    async loginUser(user: string, password: string){
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}