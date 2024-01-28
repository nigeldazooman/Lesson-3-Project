describe('Update Booking for Restful Booker', () => {
    it('should update a specific booking', () => {
      cy.request({
        method: 'PUT',
        url: 'https://restful-booker.herokuapp.com/booking/1476',
        body: {
          "firstname": "Bradley",
          "lastname": "Nicholson",
          "totalprice": 111,
          "depositpaid": true,
          "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
          },
          "additionalneeds": "Breakfast"
        },
        headers: {
          Cookie: "token=76e437f4d92e066"
        }
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.contain.property("firstname", "Bradley");
      })
    });
});

//Cypress error message "Not Allowed" API Documentation states this is a PUT endpoint