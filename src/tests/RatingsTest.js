const assert = require('assert');
const companiesLandingPage = require('../model/pages/CompaniesLandingPage');

describe('Ratings tests', () => {
  beforeEach(async () => {
    // await new Builder().forBrowser('chrome').build();
    // await driver.manage().setTimeouts({ implicit: 3000 }); // Wait
    // await driver.manage().window().maximize(); // Maximize
    // await driver.get('https://www.seek.com.au/companies/'); // Get webpage
  });

  afterEach(async () => {
    // await driver.quit();
  });

  describe('Get ratings', () => {
    it('should open the company page and check the titles match', async () => {
      await companiesLandingPage.go_to_landing_page();
      const expectedTitle = await companiesLandingPage.getByCss("a[data-automation='CompanySearchResult'] span").getText();

      await companiesLandingPage.clickByCss("a[data-automation='CompanySearchResult']");

      const actualTitle = await companiesLandingPage.getByCss('div h1').getText();

      assert.strictEqual(expectedTitle, actualTitle);
    });
  });
});
