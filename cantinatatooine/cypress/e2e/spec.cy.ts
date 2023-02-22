describe('App', () => {
  it('Can at a bare minimum- load', () => {
    cy.visit('')

    //  Verify that the value has been updated
    cy.get('h2').contains("STAR WARS: THE API")
  })

  it('Can load the list page', () => {
    cy.visit('/people')

    cy.get('#root').contains('TODO: add person list')
  })

  it('Can load the detail page', () => {
    cy.visit('/person/1')

    cy.get('h1').contains('Luke')
  })

})
