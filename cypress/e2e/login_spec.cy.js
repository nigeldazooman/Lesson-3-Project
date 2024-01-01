function launchApplication() {
    cy.visit('https://demo.applitools.com/')
}
function enterUsername(username) {
    cy.visit('https://demo.applitools.com/')
    cy.get('#username').type('yourUsername')
}
function enterPassword(password) {
    cy.visit('https://demo.applitools.com/')
    cy.get('#username').type('yourUsername')
    cy.get('#password').type('yourPassword')
}
function clickLoginButton() {
    cy.visit('https://demo.applitools.com/')
    cy.get('#username').type('yourUsername')
    cy.get('#password').type('yourPassword')
    cy.get('#log-in').click()
}
function verifyLoginSuccess() {
    cy.visit('https://demo.applitools.com/')
    cy.get('#username').type('yourUsername')
    cy.get('#password').type('yourPassword')
    cy.get('#log-in').click()
    cy.get('body')
}

describe ('Launch Application', () => {
    it ('should launch the website', () => {
        launchApplication();
    })
})

describe ('Enter Username', () => {
    it ('should enter the username', () => {
        enterUsername('yourUsername')
    })
})

describe ('Enter Password', () => {
    it ('should enter the username and password', () => {
        enterPassword('yourPassword')
    })
})
describe ('Click Login Button', () => {
    it('should submit login credentials', () => {
        clickLoginButton()
    })
})
describe ('Verify Successful Login', () => {
    it('should verify successful login', () => {
        verifyLoginSuccess()
    })
})