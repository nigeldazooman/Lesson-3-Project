describe('template spec', () => {
  it('verifyh1', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('have.text','Kitchen Sink')
  })
    it('clickquerying', () => {
      cy.visit('https://example.cypress.io')
      cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click()
      cy.get('#query-btn').should('contain','Button')
      cy.get('#query-btn').click()
    })
    it('enteremail', () => {
      cy.visit('https://example.cypress.io')
      cy.get('.home-list > :nth-child(3) > :nth-child(1)').click()
      cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
    })
  })