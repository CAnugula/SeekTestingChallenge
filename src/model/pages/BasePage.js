const { By } = require('selenium-webdriver');

class BasePage {
  baseurl = 'https://www.seek.com.au/companies/';
  constructor(driver) {
    this.driver = driver;
  }

  go_to_url(theURL) {
    return this.driver.get(theURL);
  }

  enterTextByCss(css, searchText) {
    this.driver.findElement(By.css(css)).sendKeys(searchText);
  }

  getById(id) {
    return this.driver.findElement(By.id(id));
  }

  getElementsById(id) {
    return this.driver.findElements(By.id(id));
  }

  getElementsByCss(css_locator) {
    return this.driver.findElements(By.css(css_locator));
  }

  getByCss(cssEl) {
    return this.driver.findElement(By.css(cssEl));
  }

  clickById(id) {
    this.getById(id).click();
  }

  clickByCss(cssEl) {
    return this.getByCss(cssEl).click();
  }

  clickByLinkText(linkTxt) {
    return this.driver.findElement(By.linkText(linkTxt)).click();
  }
}

module.exports = BasePage;
