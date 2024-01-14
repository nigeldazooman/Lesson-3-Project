describe ("testcustomcommand", () => {
    it ("should log in successfully", () =>{
        cy.visit('https://www.saucedemo.com/');
        cy.login("standard_user", "secret_sauce");
       
    })
})