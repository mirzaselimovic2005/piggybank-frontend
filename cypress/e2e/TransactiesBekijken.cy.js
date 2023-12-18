describe('Transacties bekijken van account INGELOGD', () => {
    it('passes', () => {
  
      cy.visit('localhost:3000/login')
  
      cy.get('.login__account').contains('Cem').click()
  
      cy.url().should('include', '/')
  
      cy.visit('localhost:3000/transactions')
    })
  })
  