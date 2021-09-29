import React from 'react';

describe ('Simple e to e test', () => {
  it('Check until the game ends', () => {
    const checkEnd = () => {
      cy.get("body").then($body => {
        //evaluates as true if victory image is shown
        if ($body.find("[data-cy=victory]").length === 0) {   
          cy.get('.user-selection > div').eq(Math.floor(Math.random() * 3)).click();
          cy.wait(200)
          checkEnd()
        } else {
          return
        }
      });
    }

    cy.visit('/')
    checkEnd()

    cy.get('.score-box h1')
    .should('contain', '10')
  });
});