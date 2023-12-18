describe('Geld overmaken naar andere rekening andere currency INGELOGD', () => {
    it('passes', () => {
  
      cy.visit('localhost:3000/login')
  
      cy.get('.login__account').contains('Cem').click()
  
      cy.url().should('include', '/')
  
      cy.visit('localhost:3000/transfer')
  
      cy.get('.container form select').first().select('Rekening van Cem - €1000')
      
      cy.get('.container form select').eq(1).select('Melvin Webster')

        cy.get('.container form select').eq(2).select('GBP')
      
      cy.get('.container form input[type="number"]').first().type('100')
      
      cy.get('.container form textarea').type('test')
      
      cy.get('.container form button[type="submit"]').click()
      
      cy.contains('Het is gelukt om').should('be.visible')
    })
  })
  