import { Locator, Page,  BrowserContext } from '@playwright/test';
export class AdminPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly administration: Locator;
    

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }
}
