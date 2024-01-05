describe('alert spec', () => {
    it('alert', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.visit('https://demoqa.com/alerts')
        cy.get('#alertButton').click()
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('You clicked a button');
        })
    })
    it('timed alert', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.visit('https://demoqa.com/alerts')
        cy.get('#timerAlertButton').click()
        cy.wait(6000)
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('This alert appeared after 5 seconds');
        })
    })
    it('confirm alert', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.visit('https://demoqa.com/alerts')
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (txt) => {
            expect(txt).to.contains('Do you confirm action?')
        })
    })
})