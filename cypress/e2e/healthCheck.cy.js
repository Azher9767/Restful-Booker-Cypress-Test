describe('Health Check API', () => {

  // This test verifies that the API is operational
  // by calling the /ping endpoint and checking the status code
  it('should return status 201', () => {

    // Send GET request to /ping endpoint
    cy.request('/ping')
      .then((response) => {

        // Assert that the response status code is 201
        expect(response.status).to.eq(201)
      })
  })
})
