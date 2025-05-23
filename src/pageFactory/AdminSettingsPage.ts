import { Locator, Page, expect, BrowserContext } from '@playwright/test';

export class AdminSettingsPage {
    //create objects
    readonly page: Page;
    readonly context: BrowserContext;
    readonly LOCATOR_EXAMPLE: Locator;
    readonly adminTab: Locator;
    readonly addTeamMemberBtn: Locator;
    readonly newUserNameTxt: Locator;
    readonly newUserEmailTxt: Locator;
    readonly newUserTitleTxt: Locator;
    readonly newUserAccessTypeDropDown: Locator;
    readonly newUserAddBtn: Locator;
    readonly newUserUpdateBtn: Locator;
    readonly newUserNameStr:Locator;
    readonly editBtnStr:Locator;
    readonly deleteBtnStr:Locator;
    readonly programAresTxt: Locator;
    readonly programAreaAddBtn: Locator;
    newProgramToggleBtn: String;
    newProgramToggleSpan: String;
   

    //locate elements
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.adminTab = page.locator("//div[text()='Admin']");
        this.addTeamMemberBtn = page.locator("//button[contains(text(),'Add Team Member')]");
        this.newUserNameTxt = page.locator("//span[text()='Name']//ancestor::label//following-sibling::input");
        this.newUserEmailTxt = page.locator("//span[text()='Email']//ancestor::label//following-sibling::input");
        this.newUserTitleTxt = page.locator("//span[text()='Title']//ancestor::label//following-sibling::input");
        this.newUserAccessTypeDropDown = page.locator("//span[text()='Access Type']//ancestor::label//following-sibling::div//select");
        this.newUserAddBtn = page.getByRole("button",{name:'Add'});
        this.newUserUpdateBtn = page.getByRole("button",{name:'Update'});
        this.newUserNameStr=page.getByRole('table').getByRole('row', { name: 'TemelioUser' }).getByRole('cell').nth(1);
        this.editBtnStr=page.getByRole('table').getByRole('row', { name: 'TemelioUser' }).getByRole('cell').getByRole('button',{name:'Edit'});
        this.deleteBtnStr=page.getByRole('table').getByRole('row', { name: 'TemelioUser' }).getByRole('cell').getByRole('button',{name:'Delete'});
        this.programAresTxt = page.getByPlaceholder("Program Area");
        this.programAreaAddBtn = page.locator("//input[@placeholder='Program Area']/following-sibling::button");
        this.newProgramToggleBtn = "//span[text()='xxx']/ancestor::div[@data-sentry-component='EditableProgramArea']//input";
        this.newProgramToggleSpan = "//span[text()='xxx']/ancestor::div[@data-sentry-component='EditableProgramArea']//span[@tabindex='0']";
    }
    
    async navigateAdminTab() {
        await  this.adminTab.click();
    }

    async addNewUser(uname:string,email:string,title:string,type:string) {
        await  this.addTeamMemberBtn.click();
        await this.newUserNameTxt.fill(uname);
        await this.newUserEmailTxt.fill(email);
        await this.newUserTitleTxt.fill(title);
        await this.newUserAccessTypeDropDown.selectOption(type);
        await this.newUserAddBtn.click();
        await this.page.waitForLoadState("domcontentloaded");
    }
    async editUser(newTitle:string) {
        await  this.editBtnStr.click();
        await this.newUserTitleTxt.fill(newTitle);
        await this.newUserAddBtn.click();
    }
    async deleteUser() {
        await  this.deleteBtnStr.scrollIntoViewIfNeeded();
        await  this.deleteBtnStr.click();
    }
    async newUserCreationCheck(title:string) {
        expect(await this.newUserNameStr.textContent()).toBe(title);
    }
    async newUserEditCheck(newTitle:string) {
        await this.page.waitForTimeout(4000);
        expect(await this.newUserNameStr.textContent()).toBe(newTitle);
    }
    async newUserDeleteCheck() {
        await this.page.waitForTimeout(2000);
        expect(await this.newUserNameStr).not.toBeVisible();
    }

    async newProgramArea(program:string) {
        await  this.programAresTxt.scrollIntoViewIfNeeded();
        await  this.programAresTxt.fill(program); 
        await this.page.waitForTimeout(5000);
        await this.programAreaAddBtn.click();
        await this.page.waitForTimeout(8000);
        expect(await this.page.locator(this.newProgramToggleBtn.replace("xxx",program)).first().getAttribute("aria-checked")).toBe("true");
        await this.page.waitForTimeout(8000);
        await this.page.locator(this.newProgramToggleBtn.replace("xxx",program)).first().scrollIntoViewIfNeeded();
        await this.page.locator(this.newProgramToggleSpan.replace("xxx",program)).first().click();
        expect(await this.page.locator(this.newProgramToggleBtn.replace("xxx",program)).first().getAttribute("aria-checked")).toBe("false");
    }


}