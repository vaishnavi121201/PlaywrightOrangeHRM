import { Page } from '@playwright/test';
import BasePage from './BasePage';

export default class AddEmployeePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // Locators
    txtFirstName = 'input[name="firstName"]';
    txtLastName = 'input[name="lastName"]';
    btnSave = "button[type='submit']";

    // Add Employee
    async addEmployee(firstName: string, lastName: string) {

        await this.fill(this.txtFirstName, firstName);

        await this.fill(this.txtLastName, lastName);

        await this.click(this.btnSave);

        // Wait until Personal Details page opens
        await this.page.waitForURL(/viewPersonalDetails/);

    }
}