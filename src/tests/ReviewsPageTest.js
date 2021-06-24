var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const assert = require('assert');
const ReviewsPage = require('../model/pages/ReviewsPage');
const CompaniesLandingPage = require('../model/pages/CompaniesLandingPage'); 

describe('Company overview page tests', function(){
  let page;
  let driver;

  beforeEach(function() {
      //Enter actions performed before test
      driver = new webdriver.Builder().forBrowser('chrome').build();
      driver.manage().setTimeouts({implicit: (10000)});
      page = new ReviewsPage(driver);
      companyLandingPage = new CompaniesLandingPage(driver);
  });

  afterEach(async function(){
      //Enter actions to be performed after test
      await driver.quit();
  });

  it('Total number of records on reviews tab should match the total number of reviews in showing result message', async function() {
      //Enter test steps
      await companyLandingPage.go_to_landing_page();
      await companyLandingPage.click_on_company();
      await page.click_on_review_tab();
     const expected_num = await page.get_tot_num_of_reviews_from_tab_title().getText();
      const actual_num = await page.get_tot_num_of_reviews_from_showing_result().getText();

      //TODO:need to find the right locator
    //   assert.strictEqual(expected_num , actual_num);
  })
})


