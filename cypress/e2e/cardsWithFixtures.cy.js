describe('Card Request', () => {

  it('Requesting Card', () => {

    // Load fixture data
    cy.fixture('cardData').then((data) => {

      // Open website
      cy.visit('https://card-admin.rexafrica.com/login')

      cy.log('Entering Email')

      // Email
      cy.get('[placeholder="admin@rex.com"]')
        .type(data.validLogin.email)

      cy.log('Entering Password')

      // Password
      cy.get('[type="password"]')
        .first()
        .type(data.validLogin.password)

      cy.log('Entering OTP')

      // OTP
      cy.get('[type="password"]')
        .eq(1)
        .type(data.validLogin.otp)

      cy.log('Clicking Login')

      // Login
      cy.get('[type="submit"]')
        .click()

      cy.log('Opening Card Requests')

      // Open Card Requests
      cy.contains('Card Requests')
        .should('be.visible')
        .click()

      cy.log('Opening View Details')

      // Open card details
      cy.get('.lucide-eye')
        .eq(7)
        .scrollIntoView()
        .click({ force: true })

      cy.log('Closing popup')

      // Close popup
      cy.contains('Close')
        .should('be.visible')
        .click()

      cy.log('Opening Create Request')

      // Open Create Request modal
      cy.contains('Create Request')
        .should('be.visible')
        .click()

      cy.log('Entering account number')

      // Account number
      cy.get('[placeholder="0098090000"]')
        .type(data.cardRequest.accountNumber)

      cy.log('Selecting pickup option')

      // Delivery Method
      cy.get('select')
        .first()
        .select(data.cardRequest.deliveryMethod)

      cy.log('Selecting Abuja Office')

      // Pickup location
      cy.get('select')
        .eq(1)
        .select(data.cardRequest.pickupLocation)

      cy.log('Submitting Card Request')

      // Submit request button inside modal
      cy.contains('Cancel')
        .parent()
        .contains('Create Request')
        .should('be.visible')
        .click({ force: true })

      // Re-open details
      cy.get('.lucide-eye')
        .eq(7)
        .scrollIntoView()
        .click({ force: true })

      cy.log('Linking Card')

      // Link Card
      cy.contains('Link Card')
        .click()

      // Search Card
      cy.get('[placeholder="Search card..."]')
        .type(data.cardInfo.cardNumber)

      // Select searched card
      cy.contains(data.cardInfo.cardNumber)
        .click()

      // Submit Link Card
      cy.contains('Cancel')
        .parent()
        .contains('Link Card')
        .should('be.visible')
        .click()

      // Open Details Again
      cy.get('.lucide-eye')
        .eq(7)
        .click()

      cy.log('Updating Status to SHIPPED')

      // Update Status
      cy.contains('Update Status')
        .click()

      cy.get('select')
        .first()
        .select('SHIPPED')

      cy.contains('Cancel')
        .parent()
        .contains('Update Status')
        .should('be.visible')
        .click()

      // Open Details Again
      cy.get('.lucide-eye')
        .eq(7)
        .click()

      cy.log('Updating Status to DELIVERED')

      // Update Status Again
      cy.contains('Update Status')
        .click()

      cy.get('select')
        .first()
        .select('DELIVERED')

      cy.contains('Cancel')
        .parent()
        .contains('Update Status')
        .should('be.visible')
        .click()

      // Open Details Again
      cy.get('.lucide-eye')
        .eq(7)
        .click()

      cy.log('Opening Account Info')

      // Account Info
      cy.contains('Account Info')
        .should('be.visible')
        .click()

      // Close
      cy.contains('Close')
        .click()

    })

  })

})