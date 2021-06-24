const companiesLandingPage = require('../model/pages/CompaniesLandingPage');
//import companiesLandingPage from '../model/pages/CompaniesLandingPage.js';

describe('This is the describe block', function(){
  //this.timeout(50000);
  beforeEach(function(){
      //Enter actions performed before test
  });

  afterEach(function(){
      //Enter actions to be performed after test
  });

  it('POM Test Check', async function() {
      //Enter test steps
      var baseurl = 'https://www.seek.com.au/companies/';
      await companiesLandingPage.go_to_url(baseurl);
      await companiesLandingPage.click_on_company();
  })
})


