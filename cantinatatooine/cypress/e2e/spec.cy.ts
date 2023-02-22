describe('App', () => {
  it('Can at a bare minimum- load', () => {
    cy.visit('')

    //  Verify that the value has been updated
    cy.get('h2').contains("STAR WARS: THE API")
  })

  it('Can load the list page', () => {
    cy.visit('/list/')

    cy.get('#root').contains('add person list')
  })
})
