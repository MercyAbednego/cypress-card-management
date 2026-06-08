// Slow typing globally
Cypress.Commands.overwrite(
  'type',
  (originalFn, element, text, options = {}) => {

    options.delay = 250

    return originalFn(element, text, options)
  }
)


// Slow click command
Cypress.Commands.add('slowClick', { prevSubject: 'element' }, (subject) => {

  cy.wait(700)

  return cy.wrap(subject).click()

})