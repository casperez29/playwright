import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 1)

import { expect } from "@playwright/test";
import { pageFixtures } from "../../hooks/pageFixtures";


Given('User navigates to the application', async function () {
    await pageFixtures.page.goto("https://qa.mygo.gorentals.com/");
});


Given('User click on the login link', async function () {
    await pageFixtures.page.locator("//a[normalize-space(text())='Log in']").click();
});


Given('User enter the username as {string}', async function (username) {
    await pageFixtures.page.locator("(//div[contains(@class,'textfield__container relative')]//input)[1]").fill(username)
});

Given('User enter the password as {string}', async function (password) {
    await pageFixtures.page.locator("(//input[contains(@class,'w-full h-9')])[2]").fill(password);
});



When('User click on the login button', async function () {
    await pageFixtures.page.locator("//button[normalize-space(text())='Login']").click();
});

Given('User is redirected to Preferences', async function () {
    await pageFixtures.page.locator("//button[@data-name='login-next-preferences']").click();
});


When('Login should fail', async function () {
    const wrongEmail = pageFixtures.page.locator("//span[normalize-space(text())='Email or Username does not exist.']")
    await expect(wrongEmail).toBeVisible();
    console.log("Wrong credentials");

});


Then('Login should be success', async function () {
    const text = await pageFixtures.page.locator(("(//div[contains(@class,'w-auto h-full')]//span)[1]")).textContent();
    console.log("Username " + text);
});