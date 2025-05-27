describe('Eesti.ee navigation tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Открывает раздел "Kodanikule"', () => {
    cy.contains('Kodanikule').click();
    cy.url().should('include', '/et/kodanik');
    cy.contains('Elanikkonnaregister').should('be.visible');
  });

  it('Открывает раздел "Ettevõtjale"', () => {
    cy.contains('Ettevõtjale').click();
    cy.url().should('include', '/et/ettevotja');
    cy.contains('Ettevõtjaportaal').should('be.visible');
  });

  it('Открывает раздел "Ametnikule"', () => {
    cy.contains('Ametnikule').click();
    cy.url().should('include', '/et/ametnik');
    cy.contains('Riigi infosüsteemi haldus').should('be.visible');
  });
});
