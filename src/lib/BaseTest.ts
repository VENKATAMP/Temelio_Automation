import { test as base } from '@playwright/test';
//replace with export of page with locators
import { AdminSettingsPage } from '../pageFactory/AdminSettingsPage';
import { ContactsPage } from '../pageFactory/ContactsPage';
import { LoginPage } from '../pageFactory/LoginPage';
import { DashboardPage } from '../pageFactory/DashboardPage';
import { AdminPage } from '../pageFactory/AdminPage';



//replase with POM classes
const test = base.extend<{
    adminSettingsPage: AdminSettingsPage;
    contactsPage: ContactsPage;
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    adminPage: AdminPage;
}>({
    adminSettingsPage: async ({ page, context }, use) => {
        await use(new AdminSettingsPage(page, context));
    },
    contactsPage: async ({ page, context }, use) => {
            await use(new ContactsPage(page, context));
    },    
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    },
    dashboardPage: async ({ page, context }, use) => {
        await use(new DashboardPage(page, context));
    },
    adminPage: async ({ page, context }, use) => {
        await use(new AdminPage(page, context));
    }
})

export default test;
export const expect = test.expect;
