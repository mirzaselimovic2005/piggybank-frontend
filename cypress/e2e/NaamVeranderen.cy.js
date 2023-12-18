describe('Naam veranderen van account INGELOGD', () => {
    it('passes', () => {
  
      cy.visit('localhost:3000/login')
  
      cy.get('.login__account').contains('Cem').click()
  
      cy.url().should('include', '/')
  
      cy.visit('localhost:3000/settings')
  
      cy.get('input[name="accountName"]').clear().type('Rekening van Pik')

      cy.get('button').contains('Opslaan').click()
  
      cy.contains('Rekening van Pik').should('be.visible')
    })
  })
  