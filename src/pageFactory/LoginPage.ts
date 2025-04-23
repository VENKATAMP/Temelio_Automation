import { Locator, Page,  BrowserContext } from '@playwright/test';
import ENV from '../lib/env';
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
    async login(username: string, password: string) {
        await this.page.goto(ENV.baseURL);
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.email.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
        await this.page.waitForLoadState("networkidle",{timeout:10000});
        await this.entryCardTile.click();
        await this.page.waitForLoadState("domcontentloaded",{timeout:10000});
    }
}
