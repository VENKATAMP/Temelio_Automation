import { Locator, Page, BrowserContext } from '@playwright/test';

export class ContactsPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly granteesTab: Locator;
    readonly peoplesTab: Locator;



    //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.granteesTab = page.getByText("Grantees");  
        this.peoplesTab = page.getByText("People");  
    }

    async navigateGranteesTab() {
        await  this.granteesTab.click();
    }
    async navigatePeopleTab() {
        await  this.peoplesTab.click();
    }
}