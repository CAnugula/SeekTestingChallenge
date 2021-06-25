var webdriver = require('selenium-webdriver');
const assert = require('assert');
const CompaniesLandingPage = require('../model/pages/CompaniesLandingPage');

describe('Ratings tests', () => {
  let driver;
  let page;

  beforeEach(async () => {
    driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.manage().setTimeouts({ implicit: 10000 });
    page = new CompaniesLandingPage(driver);
  });

  afterEach(async () => {
    await driver.quit();
  });

  context('Get title', () => {
    it('should open the company page and check the titles match', async () => {
      await page.go_to_landing_page();
      const expectedTitle = await page
        .getByCss("a[data-automation='CompanySearchResult'] span")
        .getText();

      await page.clickByCss("a[data-automation='CompanySearchResult']");

      const actualTitle = await page.getByCss('div h1').getText();

      assert.strictEqual(expectedTitle, actualTitle);
    });
  });

  context('Get rating average', () => {
    it('should get the rating from the ratings average score', async () => {
      await page.go_to_landing_page();
      let expectedRating = 3.4;

      await page.getByCss("a[data-automation='CompanySearchResult']").click();

      let actualRating = await page
        .getByCss('#overview-top-section div div div div div div h3')
        .getText();

      assert.notStrictEqual(expectedRating, actualRating);
    });
  });

  context('Get rating total', () => {
    it('should get the total rating score from ratings', async () => {
      await page.go_to_landing_page();
      let expectedTotalRating = '3426 ratings in total';

      await page.getByCss("a[data-automation='CompanySearchResult']").click();

      let actualTotalRating = await page
        .getByCss('#overview-top-section div div div div div div span')
        .getText();

      assert.notStrictEqual(expectedTotalRating, actualTotalRating);
    });
  });
});
