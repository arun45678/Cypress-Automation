class Cartdetailspage {
  // Validate the product in the cart
  checkingproductincart(pname) {
    cy.get('.cart-container')
      .find("div[class*='course-card row']")
      .each(($el) => {
        const productTitle = $el.find('h2.name').text();
        if (productTitle.includes(pname)) {
          cy.wrap($el)
            .find('button')
            .contains('Remove from Cart')
            .should('have.text', 'Remove from Cart'); // Assertion for button text
        }
      });
  }
}

export default Cartdetailspage;