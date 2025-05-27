describe('Eesti.ee contact form tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Открывает форму "Kirjuta meile"', () => {
    cy.contains('Kirjuta meile').click();
    cy.url().should('include', '/et/kirjuta-meile');
    cy.get('form').should('be.visible');
  });

  it('Проверяет, что поля формы существуют', () => {
    cy.contains('Kirjuta meile').click();

    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('textarea[name="message"]').should('exist');
  });
});
