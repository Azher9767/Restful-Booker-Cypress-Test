describe('Delete Booking API', () => {
  it('should delete a booking successfully', () => {
    // Step 1: Load payload from fixture
    cy.fixture('createBookingPayload').then((bookingPayload) => {

      // Step 1: Create booking first
      cy.request({
        method: 'POST',
        url: '/booking',
        body: bookingPayload
      }).then((createResponse) => {

        expect(createResponse.status).to.eq(200);
        const bookingId = createResponse.body.bookingid;

        // Step 2: Create token for authentication
        cy.request({
          method: 'POST',
          url: '/auth',
          body: {
            username: "admin",
            password: "password123"
          }
        }).then((authResponse) => {

          expect(authResponse.status).to.eq(200);
          const token = authResponse.body.token;

          // Step 3: Delete the booking
          cy.request({
            method: 'DELETE',
            url: `/booking/${bookingId}`,
            headers: {
              Cookie: `token=${token}`
            }
          }).then((deleteResponse) => {

            expect(deleteResponse.status).to.eq(201);
          });
        });
      });
    });
  });
});
