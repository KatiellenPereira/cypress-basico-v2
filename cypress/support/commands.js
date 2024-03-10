Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Katiellen')
    cy.get('#lastName').type('Pereira')
    cy.get('#email').type('Katiellenpereira@hotmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button','Enviar').click()
})