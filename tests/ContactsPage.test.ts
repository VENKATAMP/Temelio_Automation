import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";


test('Verify Admin Settings page with Add New Contact and Delete functionality, @Contacts @Temelio', async ({ loginPage, contactsPage }) => {
  await loginPage.login(ENV.uname, ENV.pwd);
  await contactsPage.navigateGranteesSubMenu();
  await contactsPage.createNewCotactAndVerifyAndDelete();
});

