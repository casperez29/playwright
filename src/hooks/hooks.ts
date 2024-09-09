import { BeforeAll, AfterAll, Before, After} from "@cucumber/cucumber";

import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { pageFixtures } from "./pageFixtures";

let page: Page;
let browser: Browser;

Before(async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    pageFixtures.page = page;
    await page.goto("https://qa.mygo.gorentals.com/");
});

After(async function(){
    await pageFixtures.page.close();
    await browser.close();

});