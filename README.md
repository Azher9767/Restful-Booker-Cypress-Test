# RESTful Booker API – Cypress Automation Project

## Project Overview

This project automates API testing for the **Restful-Booker** service using **Cypress**.
The goal is to gain hands-on experience in:

* Writing automated API tests
* Organizing Cypress test suites
* Using fixtures for payloads
* Running CRUD operations via real APIs
* Following clean and maintainable test structure

This project fulfills the assignment requirement of implementing **Health Check + 4 functional API tests**.

##  Project Structure

```
cypress-project/
│
├── cypress/
│   ├── e2e/
│   │   ├── healthCheck.cy.js
│   │   ├── createBooking.cy.js
│   │   ├── getBooking.cy.js
│   │   ├── updateBooking.cy.js
│   │   └── deleteBooking.cy.js
│   │
│   ├── fixtures/
│   │   └── createBookingPayload.json
│   │
│   └── support/
|        └── commands.js
|        └── e2e.js
│
├── cypress.config.js
└── README.md
```

## API Reference

All tests use the public API:

**[https://restful-booker.herokuapp.com/apidoc/index.html](https://restful-booker.herokuapp.com/apidoc/index.html)**

The following endpoints were automated:

| Action         | Method | Endpoint       |
| -------------- | ------ | -------------- |
| Health Check   | GET    | `/ping`        |
| Create Booking | POST   | `/booking`     |
| Get Booking    | GET    | `/booking/:id` |
| Update Booking | PUT    | `/booking/:id` |
| Delete Booking | DELETE | `/booking/:id` |

---

## Test Coverage

### 1. Health Check Test

Confirms the API is online by hitting `/ping` and expecting status **201**.

### 2. Create Booking

Sends payload from fixture and validates:

* Status code = 200
* Response has `bookingid`
* Response contains same data sent

### 3. Get Booking

Workflow:

1. Create booking
2. GET `/booking/:id`
3. Validate returned data

### 4. Update Booking

Workflow:

1. Create booking
2. Generate token `/auth`
3. Update using PUT
4. Validate updated fields

### 5. Delete Booking

Workflow:

1. Create booking
2. Generate token
3. DELETE booking
4. GET call should return **404 Not Found**

## Prerequisites

Make sure the following are installed:

* Node.js (v18+ recommended)
* npm
* Cypress

Check versions:

```
node -v
npm -v
```

## Setup Instructions

### 1. Install Dependencies

```
npm install
```

### 2. Open Cypress UI

```
npx cypress open
```

### 3. Run All Tests in CLI

```
npx cypress run
```

### 4. Run a Specific Test

Example:

```
npx cypress run --spec "cypress/e2e/createBooking.cy.js"
```

---

## Cypress Configuration

`cypress.config.js`:

```javascript
module.exports = {
  e2e: {
    baseUrl: 'https://restful-booker.herokuapp.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    setupNodeEvents(on, config) {},
  },
};
```

## Fixtures

Payload file used in booking actions:
`cypress/fixtures/createBookingPayload.json`

```json
{
  "firstname": "Rafiullah",
  "lastname": "Malekzadeh",
  "totalprice": 150,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2025-12-01",
    "checkout": "2025-12-05"
  },
  "additionalneeds": "Breakfast"
}
```

## Final Notes

This project gives full API automation exposure using Cypress, following best practices:

* Reusable fixtures
* Clean folder structure
* CRUD workflow
* Token-based authentication handling


