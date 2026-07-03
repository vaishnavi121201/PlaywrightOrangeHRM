import { Page, Locator } from '@playwright/test';
import WaitUtils from '../utils/WaitUtils';

export default class BasePage {

    protected wait: WaitUtils;

    constructor(protected page: Page) {
        this.wait = new WaitUtils(page);
    }

    async open(url: string) {
        await this.page.goto(url);
    }

    async click(locator: string) {

        const element = this.page.locator(locator);

        await this.wait.waitForClickable(element);

        await element.click();

    }

    async fill(locator: string, value: string) {

        const element = this.page.locator(locator);

        await this.wait.waitForElement(element);

        await element.fill(value);

    }

    getLocator(locator: string): Locator {
        return this.page.locator(locator);
    }

}