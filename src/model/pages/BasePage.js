const {By} = require('selenium-webdriver');

class BasePage {
    baseurl = 'https://www.seek.com.au/';
    constructor(driver) {
        this.driver = driver;
    }

    go_to_url(theURL){
        return this.driver.get(theURL);
    }

    enterTextByCss(css, searchText){
        this.driver.findElement(By.css(css)).sendKeys(searchText);
    }

    getById(id) {
        return this.driver.findElement(By.id(id));
    }

    getByCss(cssEl) {
        return this.driver.findElement(By.css(cssEl));
    }

    clickById(id){
        this.getById(id).click();
    }

    clickByCss(cssEl){
        return this.getByCss(cssEl).click();
    }

    sleep(seconds){
        var e = new Date().getTime() + (seconds * 1000);
        while (new Date().getTime() <= e) {}
    }

}

module.exports = BasePage;