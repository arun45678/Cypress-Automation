describe('My Third Test Suite', function () {
  it('My Third Testcase', function () {
    // Visit the login page
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('form input').type('ca');
    cy.wait(2000);
    cy.get('.product:visible').should('have.length', 4);

    // Filtering the product out of 4
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

    cy.get('.products').find('.product').each(($el, index, $list) => {
      const productTitle = $el.find('h4.product-name').text();

      if (productTitle.includes('Cashews')) {
        cy.wrap($el).find('button').click();
      }
    });

    // Logging the brand name
    cy.get('.brand').then(($logElement) => 
      {
            const brandText = $logElement.text(); // Extract text
            cy.log(brandText); // Log it in the Cypress Command Log
       });

       
  });
});