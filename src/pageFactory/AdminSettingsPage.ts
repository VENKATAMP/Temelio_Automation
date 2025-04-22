import { Locator, Page, BrowserContext } from '@playwright/test';

export class AdminSettingsPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly LOCATOR_EXAMPLE: Locator;



    //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.LOCATOR_EXAMPLE = page.locator("LOCATOR HERE");


    }


}