/// <reference types="cypress" />

describe('Habit dashboard', () => {
  
  beforeEach(() => {
    cy.visit('/habits')
  })

  it('should display modal when Add button is clicked', () => {
    cy.contains('button', 'Add').click()
    cy.contains('Add a new habit').should('be.visible')
  })

  it('should display a habit card when new habit is added', () => {
    const habit = 'Jogs every morning'
    cy.get('#habit-add-btn').click()
    cy.get('input[placeholder="Habit"]').type(habit)
    cy.contains('Save Changes').click()
    cy.contains(habit)
      .should('be.visible')
      .and('have.class', 'HabitCard__habit-container')
  })

  it('should toggle icon when habit card is clicked', () => {
    const habit = 'A habit'
    cy.get('#habit-add-btn').click()
    cy.get('input[placeholder="Habit"]').type(habit)
    cy.contains('Save Changes').click()
    cy.get('[src="/static/media/close.fa7e5ead.svg"]').should('be.visible')
    cy.contains(habit).click()
    cy.get('[src="/static/media/check.9e8832df.svg"]').should('be.visible')
  })
})