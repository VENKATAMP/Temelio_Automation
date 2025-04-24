import { Locator, Page, expect,BrowserContext } from '@playwright/test';

export class ContactsPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly granteesSubMenu: Locator;
    readonly communicationsSubMenu: Locator;
    readonly granteesTab: Locator;
    readonly peoplesTab: Locator;
    readonly newContactBtn: Locator;
    readonly findEntityNameTxt: Locator;
    readonly createContactBtn: Locator;
    readonly searchBtn: Locator;
    readonly searchResultsFirstEntity: Locator;
    readonly searchResultsFirstEntityName: Locator;
    readonly newEntityNameOnGranteesTable: Locator;
    readonly newEntityDeleteBtn: Locator;
    readonly newEntityDeleteConfirmBtn: Locator;

    //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.granteesSubMenu = page.getByText("Grantees"); 
        this.communicationsSubMenu = page.getByText("Communications"); 
        this.granteesTab = page.getByText("Grantees"); 
        this.peoplesTab = page.getByText("People");  
        this.newContactBtn = page.getByRole("button",{name:"New Contact"});
        this.findEntityNameTxt = page.getByPlaceholder("Search by Name");
        this.createContactBtn = page.getByRole("button",{name:'Create Contact'});
        this.searchBtn = page.getByRole("button",{name:"Search"});
        this.searchResultsFirstEntity= page.locator("//div[@data-sentry-component='ExternalNonprofitSearchResults']//div[@role='button']").first();
        this.searchResultsFirstEntityName= page.locator("//div[@data-sentry-component='ExternalNonprofitSearchResults']//div[@role='button']//p").first();
        this.newEntityNameOnGranteesTable= page.locator("//a[@data-sentry-element='Link'][text()='Hand Ee']").first();
        this.newEntityDeleteBtn = page.locator("//button[@aria-label='Delete']");
        this.newEntityDeleteConfirmBtn = page.getByRole("button",{name:'Confirm'});
    }

    async navigateGranteesSubMenu() {
        await  this.granteesSubMenu.click();
        await this.page.waitForLoadState("domcontentloaded");
    }
    async navigatePeopleTab() {
        await  this.peoplesTab.click();
    }

    async createNewCotactAndVerifyAndDelete() {
        await  this.newContactBtn.click();
        await this.page.waitForLoadState("domcontentloaded");
        await  this.findEntityNameTxt.fill("Hand Ee");
        await  this.searchBtn.click();
        await this.page.waitForLoadState("domcontentloaded");
        await  this.searchResultsFirstEntity.click();
        await this.page.waitForLoadState("domcontentloaded");
        let entityName=await  this.searchResultsFirstEntityName.textContent();
        await  this.createContactBtn.click();
        await this.page.waitForLoadState("domcontentloaded");
        expect(await this.newEntityNameOnGranteesTable.textContent()).toBe(entityName);
        await  this.newEntityNameOnGranteesTable.click();
        await this.page.waitForLoadState("domcontentloaded");
        await  this.newEntityNameOnGranteesTable.click();
        await this.page.waitForLoadState("domcontentloaded");
        await  this.newEntityDeleteBtn.click();
        await this.page.waitForLoadState("domcontentloaded");
        await  this.newEntityDeleteConfirmBtn.click();
        await this.page.waitForLoadState("domcontentloaded");
        expect(await this.newEntityNameOnGranteesTable).not.toBeVisible();
    }
}