describe('Customer Raffle Submission', () => {
    it('Submits valid customer details', () => {
      
      cy.visit('https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca');
      // The form inputs
      cy.get('#input-3').type('John Dominic');
      
      cy.get('#input-4').type('john.dominic@example.com');
      cy.get('#input-8').type('17');
      cy.get('#input-9').type('I Like...');
  
      cy.wait(2000)
      
      cy.get('.button-sc-1ta45yz-0').click(); // Submit the form
  
      // Assertion
      cy.contains('Must be 18 or older to enter.'); 
      
    });
  });
  