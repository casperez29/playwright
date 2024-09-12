import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 1)

import { expect } from "@playwright/test";
import { pageFixtures } from "../../hooks/pageFixtures";

When('User is on MyGO Landing Page', async function () {
    const navMenu = pageFixtures.page.locator("//nav[contains(@class,'w-full flex')]");
    // const myGoLogo = pageFixtures.page.locator("div[contains(@class,'w-32 h-full')]")
    await expect(navMenu).toBeVisible();
});

When('Booking is clicked on Menu', async function () {
    await pageFixtures.page.locator("[name='menu-booking-list-expanded']").click();
});

Then('User should be able to see Bookings', async function () {
    const bookingGrid = pageFixtures.page.locator("//div[contains(@class,'tab-header sticky')]/following-sibling::div[1]");
    await expect(bookingGrid).toBeVisible();
});