import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class DashboardPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    dashboardHeader = "h6";

    getMenu(menuName: string) {

        return this.page.locator(
            `//span[text()='${menuName}']`
        );

    }

    async verifyDashboard() {

        await this.wait.waitForText(
            this.page.locator(this.dashboardHeader),
            "Dashboard"
        );

    }

    async clickMenu(menuName: string) {

        const menu = this.getMenu(menuName);

        await this.wait.waitForClickable(menu);

        await menu.click();

    }

}