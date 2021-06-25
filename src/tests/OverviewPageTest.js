var webdriver = require('selenium-webdriver');
const assert = require('assert');
const OverviewPage = require('../model/pages/OverviewPage');
const CompaniesLandingPage = require('../model/pages/CompaniesLandingPage');

describe('Company overview page tests', function () {
  let page;
  let driver;

  beforeEach(function () {
    //Enter actions performed before test
    driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.manage().setTimeouts({ implicit: 10000 });
    page = new OverviewPage(driver);
    companyLandingPage = new CompaniesLandingPage(driver);
  });

  afterEach(async function () {
    //Enter actions to be performed after test
    await driver.quit();
  });

  it('User should see 2 reviews on overview page', async function () {
    //Enter test steps
    await companyLandingPage.go_to_landing_page();
    await companyLandingPage.click_on_company();
    const reviews = await page.get_reviews_from_Employee_reviews_category();

    assert.strictEqual(2, reviews.length);
  });
});
