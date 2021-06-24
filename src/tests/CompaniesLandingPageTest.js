var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const CompaniesLandingPage = require('../model/pages/CompaniesLandingPage');
// const companiesLandingPage = require('../model/pages/CompaniesLandingPage');
//import companiesLandingPage from '../model/pages/CompaniesLandingPage.js';

describe('Company overview tests', function(){
  //this.timeout(50000);
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
})


