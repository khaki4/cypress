describe('Form Input', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Focuses the input on load', () => {
    cy.focused()
      .should('have.class', 'new-todo')
  });

  it('should Accepts input',() => {
    const typedText = 'New-Todo';
    cy.get('.new-todo')
      .type(typedText)
      .should('have.value', typedText);
  });
});