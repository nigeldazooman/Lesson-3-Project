describe ('Health Check for Restful Booker', () => {
    it('should ping the Restful Booker site', () => {
        cy.request('GET', 'https://restful-booker.herokuapp.com/ping')
          .should((response) => {
            expect(response.status).to.eq(201);
          });
    });
});