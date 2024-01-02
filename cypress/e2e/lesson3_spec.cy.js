function ValidLogin() {
  cy.visit('https://www.saucedemo.com/')
  cy.get('#user-name').type('standard_user')
  cy.get('#password').type('secret_sauce')
  cy.get('#login-button').click()
}

describe('Lesson 3 Test', () => {
  it('TestValidLogin', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })
  it('TestInvalidLogin', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('invalid_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('h3').should('have.text','Epic sadface:Username and password do not match any user in this service')
  })
  it('NavigatetoBackpackPage', () => {
    ValidLogin();
    cy.get('#item_4_title_link').click()
    cy.get('#inventory_details_name_large').should('have.text','Sauce Labs Backpack')
  })
  it('VerifyItemsAddedtoCart', () => {
    ValidLogin();
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#shopping_cart_container').click()
    cy.get('#item_4_title_link').should('have.text','Sauce Labs Backpack')
    cy.get('#item_0_title_link').should('have.text','Sauce Labs Bike Light')
  })
  it('VerifySuccessfulCheckout', () => {
    ValidLogin();
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#shopping_cart_container').click()
    cy.get('#checkout').click()
    cy.get('#first-name').type('default')
    cy.get('#last-name').type('user')
    cy.get('#postal-code').type('12345')
    cy.get('#finish').click()
    cy.get('h2').should('have.text','Thank you for your order!')
  })
})