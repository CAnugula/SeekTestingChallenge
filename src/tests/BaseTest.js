import 'chromedriver';
import { Builder, By } from 'selenium-webdriver';

export default class BaseTest {
  navigateToCompanyCard() {
    return driver.findElement(By.css("a[data-automation='CompanySearchResult']")).click();
  }
}
