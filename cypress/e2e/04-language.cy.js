describe('Eesti.ee language switch tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Переключает язык на English', () => {
    cy.contains('English').click();
    cy.url().should('include', '/en');
    cy.contains('Services').should('be.visible');
  });

  it('Переключает обратно на eesti keel', () => {
    cy.contains('English').click();
    cy.contains('Eesti keel').click();
    cy.url().should('include', '/et');
    cy.contains('Teenused').should('be.visible');
  });
});
