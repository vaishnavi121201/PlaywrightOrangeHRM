import { Page } from '@playwright/test';
import BasePage from './BasePage';

export default class PIMPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    addEmployeeBtn = "//a[text()='Add Employee']";

    async clickAddEmployee() {

        await this.click(this.addEmployeeBtn);

    }

}