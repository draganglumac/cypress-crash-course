/// <reference types="cypress" />

const { fail } = require("assert")

describe('Accomplishments dashboard', () => {

  beforeEach(() => {
    cy.visit('/accomplishments')
    cy.get('[data-cy="accomplishment-title-input"]').type('My accomplishment')
    cy.get('[data-cy="accomplishment-input"]').type("My accomplishment details")
  })

  it('should show error message if any information about an accomplishment is missing', () => {
    cy.contains('Submit Accomplishment').click()
    
    cy.get('.Accomplishment-error-container').should('be.visible')
    cy.contains('Complete the items above to continue').should('be.visible')
  })

  it('should display validation component if all the information is input', () => {
    cy.get('[data-cy="accomplishment-checkbox"]').click()
    cy.contains('Submit Accomplishment').click()

    cy.contains('This Accomplisment was Successfully Submitted').should('be.visible')
    cy.get('.Accomplishment-img').should('be.visible')
  })

  it('should reset fields upon return to Accomplishments page', () => {
    cy.get('[data-cy="accomplishment-checkbox"]').click()
    cy.contains('Submit Accomplishment').click()
    cy.contains('Go Back').click()

    cy.get('[data-cy="accomplishment-title-input"]').should('have.value', '')
    cy.get('[data-cy="accomplishment-input"]').should('have.value', '')
    cy.get('[data-cy="accomplishment-checkbox"]').should('not.be.checked')
  })
})