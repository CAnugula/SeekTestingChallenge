// import { Key } from 'selenium-webdriver';
// import BasePage from './BasePage.js';

const {Key} = require('selenium-webdriver');
const BasePage = require('./BasePage');

class CompaniesLandingPage extends BasePage {
    currentPageRelativeUrl = "companies/";
    companyTile = 'a[href^="/companies/mcdonalds"]';

    constructor(driver) {
        super(driver);
    }

    // enter_search(searchText){
    //     //This will enter text into the search field
    //     this.enterTextByCss(this.searchField, searchText);
    //     //this will send the enter key to the element
    //     this.enterTextByCss(this.searchField, Key.RETURN);
    // }

    go_to_landing_page() {
        return this.go_to_url(this.baseurl + this.currentPageRelativeUrl);
    }

    click_on_company(){
        return this.clickByCss(this.companyTile);
    }
}

module.exports = CompaniesLandingPage;