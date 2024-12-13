import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Loginpage from '../../../../support/PageObjects/Loginpage';

let loginpage;

Given('I am on landing page', () => {
    loginpage = new Loginpage();
    const baseURL = Cypress.env("URL");
    loginpage.navigationonloginpage(baseURL);
});

When('I login to the application', function () {
    this.productlistpage=loginpage.login(this.data.email1, this.data.password)
    this.productlistpage.welcomemsgvalidation();
});
When('I login to the application portal', function(dataTable) {
    this.productlistpage=loginpage.login(dataTable.rawTable[1][0],dataTable.rawTable[1][1])
    this.productlistpage.welcomemsgvalidation();
});


When('I filter product and add product into cart', function () {
    this.productlistpage.filterproductaddtocard(this.data.productname);
});

Then('Moved on cart page and verify the item on cart details page', function () {
    this.cartpage = this.productlistpage.navigationcartpage();
    this.cartpage.checkingproductincart(this.data.productname);
});
