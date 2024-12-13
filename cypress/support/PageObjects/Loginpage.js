import Productlistpage from '../../support/PageObjects/Productlistpage'; // Correct the import path

class Loginpage {
  // Navigate to login page
  navigationonloginpage(URL) {
    cy.visit(URL);
  }

  // Perform login
  login(email1, password) {
    cy.get("input[name='email1']").type(email1);
    cy.get("[placeholder='Enter Password']").type(password);
    cy.get('.submit-btn').click();
    return new Productlistpage(); // Return the Productlistpage instance
  }
}

export default Loginpage;