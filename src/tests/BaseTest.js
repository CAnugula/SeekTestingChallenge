import 'chromedriver';
import { Builder } from 'selenium-webdriver';
import assert from 'assert';

export class BaseTest {
  constructor() {}
  
  let driver = await new Builde
  r().forBrowser('chrome').build();
  
  describe('Base Test', async () => {
    before(async () => {
      await driver.manage().setTimeouts({ implicit: 3000 }); // Wait
      await driver.manage().window().maximize(); // Maximize
      await driver.get('https://www.seek.com.au/companies/'); // Get webpage
    });

    after(async () => {
      await driver.quit();
    });

    // describe('test', function () {
    //   it('something', function () {
    //     console.log('test');
    //   });
    // });
  });
}