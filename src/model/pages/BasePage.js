var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    
    constructor(){
        global.driver = driver;
    }

    go_to_url(theURL){
        return driver.get(theURL);
    }

    enterTextByCss(css, searchText){
        driver.findElement(By.css(css)).sendKeys(searchText);
    }

    getById(id) {
        return driver.findElement(By.id(id));
    }

    getByCss(cssEl) {
        return driver.findElement(By.css(cssEl));
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