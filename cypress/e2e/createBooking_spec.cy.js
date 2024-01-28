describe('Create Booking for Restful Booker', () => {
    it('should create a specific booking', () => {
      cy.request('POST', 'https://restful-booker.herokuapp.com/booking', {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2018-01-01",
          "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.contain.property("bookingid");
      })
      });
    });