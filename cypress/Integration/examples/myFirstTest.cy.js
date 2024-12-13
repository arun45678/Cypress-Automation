import Loginpage from '../../support/PageObjects/Loginpage'; // Correct the import path
import Productlistpage from '../../support/PageObjects/Productlistpage';
import Cartdetailspage from '../../support/PageObjects/Cartdetailspage';


describe('End To End Application flow', function () {
  before(function () {
    // Load the fixture file and assign data to `this`
    cy.fixture('example').then(function (data) {
      this.data = data;
      this.loginpage = new Loginpage();
      
    });
  });

  it('end to end flow', function () {
    const { email1, password, productname } = this.data; // Destructure data from the fixture

    // Step 1: Visit the login page
    const baseURL = Cypress.env("URL"); // Dynamically fetch the URL from Cypress config
    this.loginpage.navigationonloginpage(baseURL);

    // Step 2: Perform login and validate welcome message
    const productlistpage = this.loginpage.login(email1, password);
     // Get the base URL dynamically from the Cypress config
     
    productlistpage.welcomemsgvalidation();

    // Step 3: Add product to cart
    productlistpage.filterproductaddtocard(productname);

    // Step 4: Navigate to cart and validate product
    const cartpage = productlistpage.navigationcartpage();
    cartpage.checkingproductincart(productname);
  });
});