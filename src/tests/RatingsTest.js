import assert from 'assert';

import 'chromedriver';
import { By, Builder } from 'selenium-webdriver';

import BaseTest from './BaseTest';

let driver = await new Builder().forBrowser('chrome').build();

describe('Ratings tests', () => {
  beforeEach(async () => {
    await driver.manage().setTimeouts({ implicit: 3000 }); // Wait
    await driver.manage().window().maximize(); // Maximize
    await driver.get('https://www.seek.com.au/companies/'); // Get webpage
  });

  afterEach(async () => {
    await driver.quit();
  });

  describe('Get ratings', () => {
    it('should open the ratings page', async () => {
      await navigateToCompanyCard();
      await driver.findElement(By.className());
    });
  });
});
