class TodoPage {
  visit() {
    cy.visit('/');
  }

  addTask(task) {
    cy.get('.new-todo').type(`${task}{enter}`);
  }

  verifyTaskInList(task) {
    cy.get('.todo-list').contains(task);
  }

  verifyTaskNotInList(task) {
    cy.get('.todo-list').should('not.contain', task);

  }

  verifyTaskInListandcompleted(task) {
    this.verifyTaskInList(task);
    cy.get('.todo-list li.completed').contains(task).should('exist');

  }

  toggleTask() {
    cy.get('[data-testid="todo-item-toggle"]').click();

  
  }
  completeTask(task) {
    cy.get('.todo-list').contains(task).parent().find('.toggle').click();
  }

  clearCompleted() {
    cy.get('.clear-completed').click();
  }
}

export const todoPage = new TodoPage();