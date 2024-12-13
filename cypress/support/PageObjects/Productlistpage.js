import Cartdetailspage from '../../support/PageObjects/Cartdetailspage';

class Productlistpage {
  // Validate the welcome message
  welcomemsgvalidation() {
    cy.get('.welcomeMessage').first().invoke('text').then((text) => {
      cy.log('Grabbed text: ' + text);
      expect(text).to.include('Welcome'); // Assertion for welcome message
    });
  }

  // Add product to cart
  filterproductaddtocard(productname) {
    cy.log(productname)
    cy.get('.home-container')
      .find("div[class*='course-card row']")
      .each(($el) => {
        const pname = $el.find('h2.name').text();
        if (pname.includes(productname)) {
          cy.wrap($el).find('button').contains('Add to Cart').click();
          cy.wrap($el).find('button').should('have.text', 'Remove from Cart'); // Assertion for button text
        }
      });
  }

  // Navigate to cart page
  navigationcartpage() {
    cy.get('.cartBtn').click();
    return new Cartdetailspage();
  }
}

export default Productlistpage;