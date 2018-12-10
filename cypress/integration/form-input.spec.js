describe('Form Input', () => {
  it('Focuses the input on load', () => {
    cy.visit('/');
    cy.focused()
      .should('have.class', 'new-todo')
  });

  it.only('should Accepts input',() => {
    const typedText = 'New-Todo';
    cy.visit('/');
    cy.get('.new-todo')
      .type(typedText)
      .should('have.value', typedText);
  });
});