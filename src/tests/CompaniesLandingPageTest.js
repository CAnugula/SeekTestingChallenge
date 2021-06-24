var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const assert = require('assert');
const CompaniesLandingPage = require('../model/pages/CompaniesLandingPage');

describe('Company landing page tests', function(){
  let page;
  let driver;

  beforeEach(function() {
      //Enter actions performed before test
      driver = new webdriver.Builder().forBrowser('chrome').build();
      driver.manage().setTimeouts({implicit: (10000)});
      page = new CompaniesLandingPage(driver);
  });

  afterEach(async function(){
      //Enter actions to be performed after test
      await driver.quit();
  });

  it('Company click check', async function() {
      //Enter test steps
      await page.go_to_landing_page();
      await page.click_on_company();
  })

  it('User enters company name and click on first item on list,  should take to company overview page', async function(){
    await page.go_to_landing_page();
    await page.click_on_company();
    await page.enter_search("McDonald's");
    await page.click_on_first_item_on_disaplyed_list();
    const page_Title = await page.get_title_of_company_page().getText();

    assert.strictEqual("McDonald's", page_Title);

  })

  it('Logged out User clicks on write review, should redirect to login page', async function(){
    await page.go_to_landing_page();
    await page.click_on_company();
    await page.click_on_write_review();
    //Throwing stale element reference
    const singIn_page_Title = await page.get_title_of_signIn_page().getText();
    assert.strictEqual("Sign in", singIn_page_Title);
  })
})


