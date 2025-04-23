import test from '../src/lib/BaseTest';
import {faker} from "@faker-js/faker";
import ENV from "../src/lib/env";


let primaryInvistigatorEmail=faker.internet.email({ firstName: 'TestUser' });
test.skip('Verify Login and Navigate to respective Admin Settings page, @AdminSettings', async ({ loginPage, adminSettingsPage,dashboardPage }) => {
  await loginPage.login(ENV.uname, ENV.pwd);
});

