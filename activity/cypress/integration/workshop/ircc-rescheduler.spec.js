describe('ircc-rescheduler', function() {

  beforeEach(() => {
    cy.visit('https://vancouver.rescheduler-dev.cds-snc.ca/')
    cy.injectAxe()
  })

  it('visits the home page', function() {
    cy.checkA11y({
      runOnly: { 
        type: 'tag',
        values: ["wcag2a", "wcag2aa"]
      }
    })
  })
})