var webdriver = require('selenium-webdriver');
const assert = require('assert');
const CompaniesLandingPage = require('../model/pages/CompaniesLandingPage');

describe('Ratings tests', () => {
  let driver;
  let page;
  beforeEach(async () => {
    driver = new webdriver.Builder().forBrowser('chrome').build();
      driver.manage().setTimeouts({implicit: (10000)});
      page = new CompaniesLandingPage(driver);
  });

  afterEach(async () => {
    await driver.quit();
  });

  describe('Get ratings', () => {
    it('should open the company page and check the titles match', async () => {
      await page.go_to_landing_page();
      const expectedTitle = await page.getByCss("a[data-automation='CompanySearchResult'] span").getText();

      await page.clickByCss("a[data-automation='CompanySearchResult']");

      const actualTitle = await page.getByCss('div h1').getText();

      assert.strictEqual(expectedTitle, actualTitle);
    });
  });
});
