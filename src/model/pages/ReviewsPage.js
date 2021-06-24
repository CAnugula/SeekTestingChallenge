const {Key} = require('selenium-webdriver');
const BasePage = require('./BasePage');

class ReviewsPage extends BasePage {
   reviews_tab_tot_records = 'a[href*="reviews"] > :nth-child(2)';
   showing_message = "h2 strong";
   reviews_tab_link = 'a[href*="reviews"]';
    constructor(driver) {
        super(driver);
    }

    click_on_review_tab(){
        return this.clickByCss(this.reviews_tab_link);
    }

    get_tot_num_of_reviews_from_tab_title(){
       return this.getByCss(this.reviews_tab_tot_records);
    }
    
    get_tot_num_of_reviews_from_showing_result(){
        return this.getByCss(this.showing_message);
    }
}

module.exports = ReviewsPage;