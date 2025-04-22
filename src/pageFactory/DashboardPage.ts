import { Locator, Page,  BrowserContext } from '@playwright/test';
export class DashboardPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly dashboardTab: Locator;
    readonly menuListIcon: Locator;
    readonly userSettingsOption: Locator;
    readonly adminTab: Locator;
    readonly addTeamMemberBtn: Locator;
    

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.dashboardTab = page.getByText("Dashboard");
        this.menuListIcon= page.locator("//button[@data-sentry-element='MenuButton'][@id='menu-button-:ro:']");
        this.userSettingsOption= page.getByText("User Settings");
        this.adminTab = page.locator("//div[text()='Admin']");
        this.addTeamMemberBtn = page.locator("//button[contains(text(),'Add Team Member')]");
        
        
    }
}
