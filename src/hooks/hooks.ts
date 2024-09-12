import { BeforeAll, AfterAll, Before, After, Status, AfterStep} from "@cucumber/cucumber";

import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { pageFixtures } from "./pageFixtures";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function(){
    browser = await chromium.launch({headless:false});
})

Before(async function () {
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixtures.page = page;
    await page.goto("https://qa.mygo.gorentals.com/");
});

After(async function({pickle, result}){
    console.log(result?.status);
    //screenshots
    if(result?.status == Status.FAILED){
        const img = await pageFixtures.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png"})
        await this.attach(img, "image/png");
    }
    await pageFixtures.page.close();
    await context.close();

});

// AfterStep( async function ({ pickle, result}) {
//     const img = await pageFixtures.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png"})
//     await this.attach(img, "image/png");
// });

AfterAll(async function (){
    await browser.close();
})