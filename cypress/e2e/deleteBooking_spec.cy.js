describe('Delete Booking for Restful Booker', () => {
    it('should delete a specific booking', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://restful-booker.herokuapp.com/booking/1793',
        headers: {
          Cookie: "token=f2899cfbe09b622"
        }
      })
      .then((response) => {
        expect(response.status).to.eq(201);
      })
    });
})