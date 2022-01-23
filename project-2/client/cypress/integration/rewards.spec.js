/// <reference types="cypress" />

describe('Rewards dashboard', () => {

  it('should display a list of rewards', () => {
    cy.visit('/rewards')
    cy.get('ul')
      .should('contain', '500 points for drinking 8 cups of water for 7 straight days')
      .and('contain', '850 points for fasting for 5 days straight')
      .and('contain', '1000 points for taking a cold shower for 10 straight days')
  })

  it('should display a mocked list of rewards', () => {
    cy.intercept('GET', 'http://localhost:4000/rewards', { fixture: 'rewards.json' });
    cy.visit('/rewards')
    cy.get('ul')
      .should('contain', '1500 points for drinking 8 cups of water for 7 straight days')
      .and('contain', '1850 points for fasting for 5 days straight')
      .and('contain', '11000 points for taking a cold shower for 10 straight days');
  })

})