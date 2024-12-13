beforeEach(function () {
    // Load the fixture file and assign data to `this`
    cy.fixture('example').then(function (data) {
      this.data = data;
       
    });
  });