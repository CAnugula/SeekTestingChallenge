const BasePage = require('./BasePage');

class CompaniesLandingPage extends BasePage {
  companyTile = 'a[href^="/companies/mcdonalds"]';
  searchField = 'input[id = "companySearch"]';
  first_item_on_list_id = '#react-autowhatever-1--item-0';
  write_review_link = 'a[href="/companies/write-a-review/"]';
  singIn_header = '[data-automation="signin-header"]';

  constructor(driver) {
    super(driver);
  }

  enter_search(searchText) {
    //This will enter text into the search field
    this.enterTextByCss(this.searchField, searchText);
    //this will send the enter key to the element
    //this.enterTextByCss(this.searchField, Key.RETURN);
  }

  go_to_landing_page() {
    return this.go_to_url(this.baseurl);
  }

  click_on_company() {
    return this.clickByCss(this.companyTile);
  }

  click_on_first_item_on_disaplyed_list() {
    return this.clickById(this.first_item_on_list_id);
  }

  get_title_of_company_page() {
    return this.getByCss('div h1');
  }

  click_on_write_review() {
    return this.clickByCss(this.write_review_link);
  }

  get_title_of_signIn_page() {
    return this.getByCss(this.singIn_header);
  }
}

module.exports = CompaniesLandingPage;
