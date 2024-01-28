describe ('Get Booking for Restful Booker', () => {
    it('should return a specific booking', () => {
        cy.request('GET', 'https://restful-booker.herokuapp.com/booking/1367')
          .should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.contain.property("firstname", "John");
          });
    });
});