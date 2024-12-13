describe('Find links without href attribute', () => {
    it('should find all <a> tags without href using CSS selector and log them', () => {
      // Visit your webpage
      cy.visit('https://freelance-learn-automation.vercel.app/login');

      // Find <a> elements without href attribute using :not() selector
      cy.get('a:not([href])')
        .each(($link, index) => {
          // Log each link's information to the console
          console.log(`Link ${index + 1}:`, $link[0]);
        })
        .should('have.length.greaterThan', 0); // Check if such links exist
    });
});
