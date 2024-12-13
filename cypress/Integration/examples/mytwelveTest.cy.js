describe('Login and filter products by price range', () => {
    it('should log in and find products with prices between 5000 and 20000', () => {
      // Visit the login page
      cy.visit('https://freelance-learn-automation.vercel.app/');
  
      // Log in with provided credentials
      
      cy.get("input[name='email']").type('arun.khatri11193@gmail.com') // Ensure correct email input selector
    cy.get("[placeholder='Enter Password']").type('Shrey@12345')  // Ensure correct password input selector
    cy.get('.submit-btn').click();  // Ensure correct submit button selector
  
      // Wait for the products page to load (you can adjust the wait based on your page load time)
      
  
    //   // Find all product elements and filter by price
    //   cy.get('.product') // Replace with the correct CSS selector for product elements
    //     .each(($product) => {
    //       // Extract the price of each product (replace with the correct selector)
    //       const priceText = $product.find('.product-price').text(); // Replace with actual selector for price
    //       const price = parseFloat(priceText.replace('₹', '').replace(',', '').trim()); // Parse price (assuming it's in INR)
  
    //       // Check if the price is between 5000 and 20000
    //       if (price >= 5000 && price <= 20000) {
    //         // Log the product details (name and price)
    //         const productName = $product.find('.product-name').text(); // Replace with the actual selector for the product name
    //         console.log(`Product: ${productName}, Price: ₹${price}`);
    //       }
    //     });
    });
  });
  