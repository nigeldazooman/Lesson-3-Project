describe("Data-Driven API Testing with Cypress", () => {
    const testFirstNames = ["John", "Sally", "Michael"];
    testFirstNames.forEach((firstName) => {
      it(`Retrieves booking IDs for ${firstName}`, () => {
        console.log(firstName);
        cy.request(`GET`, `https://restful-booker.herokuapp.com/booking?firstname=${firstName}`).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.length.greaterThan(0);
          });
        });
      });
    });
//booking ID test for Michael fails because there are no bookings for Michael