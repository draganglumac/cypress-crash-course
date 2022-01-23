/// <reference types="cypress" />

describe('Accomplishments dashboard', () => {

  it('should display the appropriate error when accomplishment includes giraffe', () => {
    cy.visit('/accomplishments')
    cy.get('[placeholder="Title"]').type('This is my accomplisment')
    cy.get('[placeholder="My accomplishment...').type('I get a giraffe')
    cy.get('[type="checkbox"]').click()
    cy.get('button').click()
    cy.contains('Your content is not appropriate').should('be.visible')
  })

  it('should display the appropriate error when accomplishment includes giraffe', () => {
    cy.intercept('POST', 'http://localhost:4000',
      {
          statusCode: 406,
          body: {
            msg: 'Your content is not appropriate'
          }
      })
      
    cy.visit('/accomplishments')
    cy.get('[placeholder="Title"]').type('This is my accomplisment')
    cy.get('[placeholder="My accomplishment...').type('I pet a giraffe')
    cy.get('[type="checkbox"]').click()
    cy.get('button').click()
    cy.contains('Your content is not appropriate').should('be.visible')
  })
})