import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';

setDefaultTimeout(60000);

Before(async function () {

    this.browser = await chromium.launch({
        headless: process.env.CI ? true : false
    });

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();

});

After(async function () {

    if (this.browser) {
        await this.browser.close();
    }

});