import 'chromedriver';

import assert from 'assert';

import { WebDriver, Builder } from 'selenium-webdriver';
// import * as Chrome from 'selenium-webdriver/chrome';

describe('Base Test', function () {
  beforeEach(async function () {
    let driver = new Builder().forBrowser('chrome').build();

    await driver.manage().setTimeouts({ implicit: 3000 }); // Wait
    await driver.manage().window().maximize(); // Maximize
    await driver.get('https://www.seek.com.au/companies/'); // Get webpage
  });

  afterEach(async function () {
    await driver.quit();
  });

  // it();
  // const homePage = new HomePage(this.driver);
});

// var driver = new webdriver.Builder().
//     .withCapabilities( { ‘browserName’ : ‘firefox’ } )
//     .build();
