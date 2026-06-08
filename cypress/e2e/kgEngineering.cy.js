describe('Launch Application', () => {
  it('Launch the test Application', () => {
   cy.visit('https://stage.kgengineeringlimited.com/login', {
  failOnStatusCode: false
})

cy.get("[name=email]").should('be.visible');
   
   cy.get("[name=email]")
   .type("contact@kgengineeringlimited.com");
   
   
   cy.get("[name=password]")
   .type("password123");
   
   cy.get("button[type=submit]")
   .click();
  
   
   cy.get("a[href='#leadsSubmenu']")
   .click();
   
   
  cy.visit('https://stage.kgengineeringlimited.com/admin/leads', {
  failOnStatusCode: false
});

cy.get("body").should('be.visible');
   
   cy.get("input[type=checkbox]")
   .check();
   
   
   cy.get("#markRespond")
   .click();
   
   cy.visit('https://stage.kgengineeringlimited.com/admin/leads');
   
   
   cy.get("a[href='https://stage.kgengineeringlimited.com/admin/leads/create']")
   .click();
   
   cy.get("[name=firstname]")
   .type("Kenneth");
   
   
   cy.get("[name=lastname]")
   .type("Okoro");
   
   
   cy.get("[name=email]")
   .type("kenokoro@yopmail.com");
   
   
   cy.get("[name=phone]")
   .type("09076564556");
   
   
   cy.get("[name=company_name]")
   .type("KENNETH WORLD");
   
   
   cy.get("select[name=source]")
   .select('linkedin');
   
   
   cy.get("select[name=status]")
   .select('lost');
   
   
   cy.get("[name=project_name]")
   .type("KENNETH CONSTRUCTION");
   
   
   cy.get("[name=project_category]")
   .type("CIVIL");
   
   
   cy.get("[name=service_category]")
   .type("CONSTRUCTION");
   
   
   cy.get("[name=project_location]")
   .type("LAGOS");
   
   
   cy.get("[name=project_description]")
   .type("Testing project");
   
   
   cy.get("[name=notes]")
   .type("Testing");
   
   
   cy.get("button.btn-secondary-custom[type=submit]")
   .click();

  })
})