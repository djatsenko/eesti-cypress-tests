describe('Eesti.ee homepage tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Проверка строки поиска', () => {
    cy.get('.search-input > input')
      .should('be.visible')
      .clear()
      .type('test')
      .should('have.value', 'test');
  });

  it('Проверка результата поиска', () => {
    cy.get('.search-input > input').type('eesti');
    cy.get('.flex-grow-1 > :nth-child(1)').should('exist');
  });
});
