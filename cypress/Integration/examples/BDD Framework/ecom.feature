Feature: Ecommerce Product Demo

@RegressionTest
Scenario: I login and verify the cart
  Given I am on landing page
  When I login to the application
  And I filter product and add product into cart
  Then Moved on cart page and verify the item on cart details page

@SmokeTest
Scenario Outline: Login and checking the cart details page
  Given I am on landing page
  When I login to the application portal
    | username                     | password    |
    | arun.khatri11193@gmail.com   | Shrey@12345 |
  And I filter product and add product into cart
  Then Moved on cart page and verify the item on cart details page

  
    