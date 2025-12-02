describe('Update Booking API', () => {
  it('should update an existing booking successfully', () => {
    
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

          // Step 3: Updated payload
          // This copies the original payload and only updates the firstname and lastname fields
          const updatedPayload = {
            ...bookingPayload,
            firstname: "UpdatedName",
            lastname: "UpdatedLast"
          };

          // Step 4: Update booking
          cy.request({
            method: 'PUT',
            url: `/booking/${bookingId}`,
            headers: {
              Cookie: `token=${token}`
            },
            body: updatedPayload
          }).then((updateResponse) => {

            expect(updateResponse.status).to.eq(200);
            expect(updateResponse.body).to.deep.include(updatedPayload);
          });
        });
      });
    });
  });
});
