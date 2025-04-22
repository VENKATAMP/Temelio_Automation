import { Locator, Page,  BrowserContext } from '@playwright/test';
export class LoginPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly loggedInUserProfileIcon: Locator;
    readonly entryCardTile: Locator;
    

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.email = page.locator("#username");
        this.password = page.locator("#password");
        this.loginBtn = page.getByRole("button",{name:'Sign In'});
        this.loggedInUserProfileIcon= page.getByRole("img",{name:'v'}); 
        this.entryCardTile = page.locator("//a[@data-sentry-component='EntityCard']").first();    
    }
}
