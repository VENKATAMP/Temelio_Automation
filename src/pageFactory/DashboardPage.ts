import { Locator, Page,  BrowserContext } from '@playwright/test';
export class DashboardPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly dashboardTab: Locator;
    readonly menuListIcon: Locator;
    readonly userSettingsOption: Locator;
    readonly contactsTab: Locator;
    

    
    

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.dashboardTab = page.getByText("Dashboard");
        this.menuListIcon= page.locator("//button[@data-sentry-element='MenuButton'][@aria-label='More']");
        this.userSettingsOption= page.getByText("User Settings"); 
        this.contactsTab = page.getByText("Contacts");  
    }
    async navigateUserSettings() {
        await this.menuListIcon.scrollIntoViewIfNeeded();
        await  this.menuListIcon.click();
        await  this.userSettingsOption.click();
        await this.page.waitForLoadState("domcontentloaded");
    }
    async navigateContacts() {
        await  this.contactsTab.click();
        await this.page.waitForLoadState("domcontentloaded");
    }
}
