describe('My Third Test Suite', function () {
  it('My Third Testcase', function () {
    // Visit the login page
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('form input').type('ca');
    cy.wait(2000);

    cy.get('.products').find('.product').each(($el, index, $list) => {
      const productTitle = $el.find('h4.product-name').text();
      if (productTitle.includes('Cashews')) {
        cy.wrap($el).find('button').click();
      }
    });
    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();
  });
});