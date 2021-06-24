const companiesLandingPage = require('../model/pages/CompaniesLandingPage');
//import companiesLandingPage from '../model/pages/CompaniesLandingPage.js';

describe('Company overview tests', function(){
  //this.timeout(50000);
  beforeEach(function(){
      //Enter actions performed before test
  });

  afterEach(function(){
      //Enter actions to be performed after test
  });

  it('Company click check', async function() {
      //Enter test steps
      await companiesLandingPage.go_to_landing_page();
      await companiesLandingPage.click_on_company();
  })
})


