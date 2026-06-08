
describe('Active Cards', () => {
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

cy.get('[placeholder="Search by name, card ID, PAN, or account number..."]')
.eq('1')
.select('BLOCKED')

cy.get('[.px-6 py-5 text-right]')
.click()

cy.contains('Transaction History')
.click()

    })
})



