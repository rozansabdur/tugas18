describe('add location', () => {
    it('success add location', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-brand-banner > img').should('be.visible')
      cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
      cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
      cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
      cy.get('.orangehrm-header-container > div > .oxd-button').click()
      cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Rozan')
      cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('depok')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('west java')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(16451)
      cy.get('.oxd-select-text-input').click()
      cy.get(':nth-child(101) > span').click()
      cy.get('.oxd-button--secondary').click()
      
  
    })

})