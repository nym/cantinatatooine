describe('App', () => {
  it('Can at a bare minimum- load', () => {
    cy.visit('')

    //  Verify that the value has been updated
    cy.get('h2').contains("STAR WARS: THE API")
  })
})
