import 'chromedriver';
import { Builder, By } from 'selenium-webdriver';

let driver = await new Builder().forBrowser('chrome').build();

// describe('Test Suite', () => {
//   beforeEach(async () => {
//     await driver.manage().setTimeouts({ implicit: 3000 }); // Wait
//     await driver.manage().window().maximize(); // Maximize
//     await driver.get('https://www.seek.com.au/companies/'); // Get webpage
//   });

//   afterEach(async () => {
//     await driver.quit();
//   });

//   describe('Test', () => {
//     it('should do something', () => {
//       console.log('Test pass');
//     });
//   });
// });

export default class BaseTest {
  navigateToCompanyCard() {
    driver.findElement(By.css("a[data-automation='CompanySearchResult']")).click();
  }
}
