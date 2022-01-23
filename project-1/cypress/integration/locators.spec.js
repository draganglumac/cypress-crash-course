/// <reference types="cypress" />

describe('Locators', () => {
  beforeEach(() => {
    cy.visit("/elements")
  })

  it('locating elements with get', () => {
    // get all elements by tag name
    cy.get('button');

    // get all elements by class name
    cy.get('.btn-with-class');

    // get all elements with specific classes
    cy.get('[class="Elements-btn btn-with-class more-btn-classes"]');
  })
})