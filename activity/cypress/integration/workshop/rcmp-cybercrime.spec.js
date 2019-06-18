describe('rcmp-rescheduler', function() {

  beforeEach(() => {
    cy.visit('https://report-a-cybercrime.cds-snc.ca/')
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