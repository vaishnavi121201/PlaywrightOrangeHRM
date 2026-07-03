import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class EmployeeListPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    employeeListMenu = "//a[text()='Employee List']";

    employeeNameTextbox =
        "(//input[@placeholder='Type for hints...'])[1]";

    searchButton = "//button[@type='submit']";

    //employeeCell =  "//div[@class='oxd-table-card']//div[@role='cell'][3]";
    getEmployee(employeeName: string) {

    return this.page.getByRole(
        'cell',
        {
            name: employeeName
        }
    );

}

    async searchEmployee(employeeName: string) {

        await this.click(this.employeeListMenu);

        await this.fill(this.employeeNameTextbox, employeeName);

        // Wait for dropdown suggestion
        await this.page.waitForTimeout(2000);

        // Select first suggestion
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

        await this.click(this.searchButton);

    }

//     async verifyEmployee(employeeName: string) {

//     await expect(
//         this.page.locator(this.employeeCell).first()
//     ).toContainText(employeeName);

// }

async verifyEmployee(employeeName: string) {

    const employee = this.getEmployee(employeeName);

    await this.wait.waitForElement(employee);

    await expect(employee).toBeVisible();

}

}