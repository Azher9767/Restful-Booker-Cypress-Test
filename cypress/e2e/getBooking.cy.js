describe('Get Booking API', () => {
  it('should fetch booking details successfully', () => {

    // Step 1: Load payload from fixture
    cy.fixture('createBookingPayload').then((bookingPayload) => {

      // Step 2: Create booking first
      cy.request({
        method: 'POST',
        url: '/booking',
        body: bookingPayload
      }).then((createResponse) => {
        expect(createResponse.status).to.eq(200);
        const bookingId = createResponse.body.bookingid;

        // Step 3: Fetch the booking using ID, GET request
        cy.request({
          method: 'GET',
          url: `/booking/${bookingId}`
        }).then((getResponse) => {
          
          expect(getResponse.status).to.eq(200);

          // Step 4: Validate response contents
          expect(getResponse.body).to.deep.include(bookingPayload);
        });
      });
    });
  });
});
