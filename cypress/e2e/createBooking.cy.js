describe('Create Booking API', () => {

  // This test verifies that a new booking can be created successfully
  it('should create a new booking successfully', () => {
    // Load the booking payload from fixtures
    cy.fixture('createBookingPayload').then((bookingPayload) => {

    // Send a POST request to create a booking
      cy.request({
        method: 'POST',
        url: '/booking',
        body: bookingPayload
      }).then((response) => {
        // Validate status code
        expect(response.status).to.eq(200);

        // Check booking id is present in response
        expect(response.body).to.have.property('bookingid');

        // Ensure the booking details match the payload we sent
        expect(response.body.booking).to.deep.include(bookingPayload);
      });
    });
  });
});
