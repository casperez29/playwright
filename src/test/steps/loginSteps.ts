import { Given, When, Then } from "@cucumber/cucumber";

import { chromium, Page, Browser, expect } from "@playwright/test";
import { TIMEOUT } from "dns/promises";

let browser: Browser;
let page: Page;

Given('User navigates to the application', async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    await page.goto("https://qa.mygo.gorentals.com/");
});


Given('User click on the login link', async function () {
    await page.locator("//a[normalize-space(text())='Log in']").click();
});


Given('User enter the username as {string}', async function (username) {
    // await page.locator("(//input[contains(@class,'w-full h-9')])[1]").fill();
    await page.locator("(//div[contains(@class,'textfield__container relative')]//input)[1]").fill(username)
});

Given('User enter the password as {string}', async function (password) {

    await page.locator("input[name='password']").type(password);
});



When('User click on the login button', async function () {
    await page.locator("//button[normalize-space(text())='Login']").click();
});

Given('User is redirected to Preferences', async function () {
    await page.locator("//button[@data-name='login-next-preferences']").click();
});


When('Login should fail', async function () {
    const wrongEmail = page.locator("//span[normalize-space(text())='Email or Username does not exist.']")
    await expect(wrongEmail).toBeVisible();
    browser.close();
});


Then('Login should be success', async function () {
    const text = await page.locator(("(//div[contains(@class,'w-auto h-full')]//span)[1]")).textContent();
    // const user = await page.locator("//span[contains(.,'Casius  Perez')]");
    console.log("Username " + text);
    // await expect(user).toBeVisible(), TIMEOUT;
    await browser.close();
});