import { Locator, Page, expect } from '@playwright/test';

export default class WaitUtils {

    constructor(private page: Page) {}

    async waitForElement(locator: Locator) {
        await locator.waitFor({
            state: 'visible',
            timeout: 30000
        });
    }

    async waitForClickable(locator: Locator) {
        await expect(locator).toBeVisible();
        await expect(locator).toBeEnabled();
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }

    async waitForText(locator: Locator, text: string) {
        await expect(locator).toHaveText(text);
    }

}