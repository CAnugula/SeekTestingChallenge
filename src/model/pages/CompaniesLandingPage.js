// import { Key } from 'selenium-webdriver';
// import BasePage from './BasePage.js';

const {Key} = require('selenium-webdriver');
const BasePage = require('./BasePage');

class CompaniesLandingPage extends BasePage {

    companyTile = 'a[href^="/companies/mcdonalds"]';

    // enter_search(searchText){
    //     //This will enter text into the search field
    //     this.enterTextByCss(this.searchField, searchText);
    //     //this will send the enter key to the element
    //     this.enterTextByCss(this.searchField, Key.RETURN);
    // }

    click_on_company(){
        return this.clickByCss(this.companyTile);
    }
}

module.exports = new CompaniesLandingPage();