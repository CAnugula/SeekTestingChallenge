const BasePage = require('./BasePage');

class OverviewPage extends BasePage {
  currentPageRelativeUrl = 'companies/';
  employee_reviews_section =
    '#review-information-section > :nth-child(3) > :nth-child(2) > :nth-child(1)> div';
  employee_reviews_section_header = 'div h2 span';

  constructor(driver) {
    super(driver);
  }

  get_reviews_from_Employee_reviews_category() {
    return this.getElementsByCss(this.employee_reviews_section);
  }
}

module.exports = OverviewPage;
