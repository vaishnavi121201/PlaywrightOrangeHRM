import { When, Then } from '@cucumber/cucumber';
import DashboardPage from '../pages/DashboardPage';
import PIMPage from '../pages/PIMPage';
import AddEmployeePage from '../pages/AddEmployeePage';
import { expect } from '@playwright/test';
import EmployeeListPage from '../pages/EmployeeListPage';

let dashboard: DashboardPage;
let pim: PIMPage;
let employee: AddEmployeePage;
let employeeList: EmployeeListPage;

const firstName = `John${Date.now()}`;
const lastName = "Smith";

When('User clicks PIM', async function () {

    dashboard = new DashboardPage(this.page);

    await dashboard.clickMenu("PIM");

});

When('User clicks Add Employee', async function () {

    pim = new PIMPage(this.page);

    await pim.clickAddEmployee();

});

When('User enters employee details', async function () {

    employee = new AddEmployeePage(this.page);
    await employee.addEmployee(firstName, lastName);

    //await employee.addEmployee("John", "Smith");

});

// Then('Employee should be added successfully', async function () {

//     await expect(this.page.locator("//h6[text()='Personal Details']"))
//         .toBeVisible();

// });

When('User searches the employee', async function () {

    employeeList = new EmployeeListPage(this.page);

    await employeeList.searchEmployee(firstName);

});

Then('Employee should appear in search results', async function () {

    await employeeList.verifyEmployee(firstName);

});
Then('Employee should be added successfully', async function () {

    await expect(this.page).toHaveURL(/viewPersonalDetails/);

});