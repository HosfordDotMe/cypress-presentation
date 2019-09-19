describe('Our First Tests', function() {
  it('Visits the Todo App', function() {
    cy.visit('/')
      .contains('todos')
  })

  it('Types into the text box', function() {
    cy.visit('/')
      .get('.new-todo')
      .type('My thing to do in the text box')
      .should('have.value', 'My thing to do in the text box')
  })

  it('Adds a Todo', function() {
    cy.visit('/')
      .get('.new-todo')
      .type('My thing to do added to list{enter}')

    cy.get('.todo-list')
      .contains('My thing to do added to list')
  })

  it('Tests state on reload', () => {
    cy.visit('/')
      .get('.new-todo')
      .type('My thing to do added to list{enter}')

    cy.reload()
      .get('.todo-list')
      .contains('My thing to do added to list')
  })

  it('Removes a Todo', function() {
    cy.visit('/')
      .get('.new-todo')
      .type('My thing to remove{enter}')
      .get('.new-todo')
      .type('Todo to keep {enter}')

    cy.get('.todo-list')
      .contains('My thing to remove')

    cy.get('.todo-list')
      .contains('Todo to keep')

    cy.get('[data-cy=My]')
      .click({ force: true })

    cy.get('.todo-list')
      .should('not.contain', 'My thing to remove')
    cy.get('.todo-list')
      .should('contain', 'Todo to keep')
  })


})
