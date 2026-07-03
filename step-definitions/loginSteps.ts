import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pages/LoginPage';

let login: LoginPage;

Given('User launches OrangeHRM application', async function () {

    login = new LoginPage(this.page);

    await login.launchApplication();

});

When('User enters username {string}', async function (username: string) {

    await login.fill(login.txtUsername, username);

});

When('User enters password {string}', async function (password: string) {

    await login.fill(login.txtPassword, password);

});

When('User clicks Login button', async function () {

    await login.click(login.btnLogin);

});

Then('User should navigate to Dashboard', async function () {

    await login.verifyDashboard();

});