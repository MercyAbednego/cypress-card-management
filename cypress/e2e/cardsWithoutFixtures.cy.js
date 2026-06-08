describe('Invalid login', () => {
  it('passes', () => {
    cy.visit('https://card-admin.rexafrica.com/login')
  

   // Email
    cy.get('[placeholder="admin@rex.com"]')
      .type('mercy@gmail.com')

    // Password (first password input)
    cy.get('[type="password"]')
      .first()
      .type('Password123')

    // OTP (second password input)
    cy.get('[type="password"]')
      .eq(1)
      .type('123456')

      // Click submit 
      cy.get('[type="submit"]')
.click()


    })
})


describe('Valid login', () => {
  it('passes', () => {
    cy.visit('https://card-admin.rexafrica.com/login')


    // Email
    cy.get('[placeholder="admin@rex.com"]')
      .type('adminuser')

    // Password (first password input)
    cy.get('[type="password"]')
      .first()
      .type('password')

    // OTP (second password input)
    cy.get('[type="password"]')
      .eq(1)
      .type('123456')

      // Click submit 
      cy.get('[type="submit"]')
.click()
    })
})


describe('Card Request', () => {

  // One test case/scenario
  it('Requesting Card', () => {

    // Open login page
    // Equivalent to manually opening browser and entering URL
    cy.visit('https://card-admin.rexafrica.com/login')

    // Log message in Cypress runner
    // Helps us know where test currently is
    cy.log('Entering Email')

    // Find email input using placeholder
    // Placeholder = admin@rex.com
    // Then type username/email
    cy.get('[placeholder="admin@rex.com"]')
      .type('adminuser')

    cy.log('Entering Password')

    // Find all password fields
    // There are TWO:
    // 1st = Password
    // 2nd = OTP
    // .first() means pick the FIRST one
    cy.get('[type="password"]')
      .first()
      .type('password')

    cy.log('Entering OTP')

    // Again find password fields
    // .eq(1) means pick SECOND field
    // because counting starts from:
    // 0 = first
    // 1 = second
    cy.get('[type="password"]')
      .eq(1)
      .type('123456')

    cy.log('Clicking Login')

    // Find submit button and click login
    cy.get('[type="submit"]')
      .click()

    cy.log('Opening Card Requests')

    // Find text "Card Requests"
    // Make sure it is visible
    // Then click it
    cy.contains('Card Requests')
      .should('be.visible')
      .click()

    cy.log('Opening View Details')

    // Find all eye icons
    // .eq(0) means click FIRST eye icon
    // Used because there are multiple view buttons
    cy.get('.lucide-eye')
  .eq(7)
  .scrollIntoView()
  .click({ force: true })

    cy.log('Closing popup')

    // Find Close button
    // Ensure visible before clicking
    cy.contains('Close')
      .should('be.visible')
      .click()

    cy.log('Opening Create Request')

    // Click FIRST Create Request button
    // This opens request modal
    cy.contains('Create Request')
      .should('be.visible')
      .click()

    cy.log('Entering account number')

    // Find account number field
    // Then type account number
    cy.get('[placeholder="0098090000"]')
      .type('7088175797')

    cy.log('Selecting pickup option')

    // Find first dropdown
    // Select Pickup option
    cy.get('select')
      .first()
      .select('Pickup')

    cy.log('Selecting Abuja Office')

    // Find second dropdown
    // Select Abuja Office
    cy.get('select')
      .eq(1)
      .select('Abuja Office')

    cy.log('Submitting Card Request')

    /*
      IMPORTANT PART

      We had TWO buttons called "Create Request"

      1. First button = background button
         (still visible behind modal)

      2. Second button = real submit button
         inside popup/modal

      When Cypress saw:

      cy.contains('Create Request')

      it got confused and clicked wrong one.

      So we made selector smarter.

      STEP 1:
      Find "Cancel" button

      STEP 2:
      Go to parent container
      (the box holding both buttons)

      STEP 3:
      Inside same container,
      find Create Request button

      STEP 4:
      Ensure visible

      STEP 5:
      Click it

      force: true means:
      Click even if Cypress thinks
      something is blocking it
    */

    cy.contains('Cancel')
      .parent()
      .contains('Create Request')
      .should('be.visible')
      .click({ force: true })
      


    /*
    cy.contains('Cancel')
      .should('be.visible')
      .click()
*/
    // Find all eye icons
    // .eq(0) means click FIRST eye icon
    // Used because there are multiple view buttons
    cy.get('.lucide-eye')
  .eq(0)
 // .scrollIntoView()
  .click({ force: true })

    cy.log('Closing popup')

     cy.contains('Link Card')
      .click()

      
      cy.get('[placeholder="Search card..."]')
      .type('320006')
      cy.contains('320006')
.click()

cy.contains('Cancel')
      .parent()
      .contains('Link Card')
      .should('be.visible')
      .click()

      // Find all eye icons
    // .eq(0) means click FIRST eye icon
    // Used because there are multiple view buttons
    cy.get('.lucide-eye')
      .eq(0)
      .click()

    cy.log('Closing popup')

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
      

      cy.get('.lucide-eye')
      .eq(0)
      .click()

    cy.log('Closing popup')

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

      

       cy.get('.lucide-eye')
      .eq(0)
      .click()

    cy.log('Closing popup')

      cy.contains('Account Info')
      .should('be.visible')
      .click()

      cy.contains('Close')
      .click()
  })

})



describe('Card Inventory', () => {
  it('passes', () => {
    cy.visit('https://card-admin.rexafrica.com/login')


    // Email
    cy.get('[placeholder="admin@rex.com"]')
      .type('adminuser')

    // Password (first password input)
    cy.get('[type="password"]')
      .first()
      .type('password')

    // OTP (second password input)
    cy.get('[type="password"]')
      .eq(1)
      .type('123456')

      // Click submit 
      cy.get('[type="submit"]')
.click()

cy.log('cardinventory')

cy.contains('Card Inventory')
.click()

cy.log('clicked active')

cy.get('.bg-slate-200')
.contains('Active')
.click()

  })
})


describe('Card Dispute', () => {
  it('passes', () => {
    cy.visit('https://card-admin.rexafrica.com/login')


    // Email
    cy.get('[placeholder="admin@rex.com"]')
      .type('adminuser')

    // Password (first password input)
    cy.get('[type="password"]')
      .first()
      .type('password')

    // OTP (second password input)
    cy.get('[type="password"]')
      .eq(1)
      .type('123456')

      // Click submit 
      cy.get('[type="submit"]')
.click()

cy.log('dispute')

cy.contains('Dispute')
.click()

cy.log('raising dispute')

cy.get('a')
.contains('Raised Disputes')
.click()

cy.wait(2000)



cy.get('[type=date]')
.eq(0)
.type('2026-04-04',{ force: true })

cy.log('get end date')

cy.get('[type=date]')
.eq(1)
.type('2026-04-04',{ force: true })

cy.get('[type=submit]')
.click()

})
})

describe('Card Dispute', () => {
  it('passes', () => {
    cy.visit('https://card-admin.rexafrica.com/login')


    // Email
    cy.get('[placeholder="admin@rex.com"]')
      .type('adminuser')

    // Password (first password input)
    cy.get('[type="password"]')
      .first()
      .type('password')

    // OTP (second password input)
    cy.get('[type="password"]')
      .eq(1)
      .type('123456')

      // Click submit 
      cy.get('[type="submit"]')
.click()

cy.log('active')

cy.contains('Active')
.click()

cy.get('.border-slate-200')
.select('BLOCKED')

cy.get('[.px-6 py-5 text-right]')
.click()

cy.contains('Transaction History')
.click()

    })
})



