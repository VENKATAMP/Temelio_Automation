import test from '../src/lib/BaseTest';
import {faker} from "@faker-js/faker";
import ENV from "../src/lib/env";


let email=faker.internet.email({ firstName: 'testusermail' });
let userTitle=faker.internet.userName({ firstName: 'Title' });
let newTitle=userTitle+"Updated";
test('Verify Login and Navigate to respective Admin Settings page, @AdminSettings', async ({ loginPage, adminSettingsPage,dashboardPage }) => {
  await loginPage.login(ENV.uname, ENV.pwd);
  await dashboardPage.navigateUserSettings();
  await adminSettingsPage.navigateAdminTab();
  await adminSettingsPage.addNewUser("TemelioUser",email,userTitle,"Admin Access");
  await adminSettingsPage.newUserCreationCheck(userTitle);
  await adminSettingsPage.editUser(newTitle);
  await adminSettingsPage.newUserEditCheck(newTitle);
  await adminSettingsPage.deleteUser();
  await adminSettingsPage.newUserDeleteCheck();
});

