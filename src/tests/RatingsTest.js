// import 'chromedriver';
// import { strict as assert } from 'assert';
// import { By, Builder } from 'selenium-webdriver';

// let driver;

// describe('Ratings tests', () => {
//   beforeEach(async () => {
//     await new Builder().forBrowser('chrome').build();
//     await driver.manage().setTimeouts({ implicit: 3000 }); // Wait
//     await driver.manage().window().maximize(); // Maximize
//     await driver.get('https://www.seek.com.au/companies/'); // Get webpage
//   });

//   afterEach(async () => {
//     await driver.quit();
//   });

//   describe('Get ratings', () => {
//     it('should open the company page and check the titles match', async () => {
//       let expectedTitle = await driver
//         .findElement(By.css("a[data-automation='CompanySearchResult'] span"))
//         .getText();

//       await driver.findElement(By.css("a[data-automation='CompanySearchResult']")).click();

//       let actualTitle = await driver.findElement(By.css('div h1')).getText();

//       assert.strictEqual(expectedTitle, actualTitle);
//     });
//   });
// });
