import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';
import { config } from '../config/config';

export default class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // Locators
    txtUsername = 'input[name="username"]';
    txtPassword = 'input[name="password"]';
    btnLogin = 'button[type="submit"]';
    lblDashboard = 'h6';

    // Open Application
    async launchApplication() {
        await this.open(config.baseUrl);
    }

    // Login
    async login(username: string, password: string) {

        await this.fill(this.txtUsername, username);
        await this.fill(this.txtPassword, password);
        await this.click(this.btnLogin);

    }

    // Verify Dashboard
    async verifyDashboard() {

        await expect(this.page.locator(this.lblDashboard))
            .toHaveText('Dashboard');

    }

}