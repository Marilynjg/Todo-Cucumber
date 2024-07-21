// cypress/e2e/step_definitions/todoSteps.js
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { todoPage } from '@pages/todoPage';





Given('I navigate todo page', () => {
    todoPage.visit();

  });

When('I add task {string}', (task) => {
  todoPage.addTask(task);
});

Then('I verify I see {string} is in the list', (task) => {
  todoPage.verifyTaskInList(task);
});

Given ('I have {string} in the list', (task) => {
  todoPage.visit();
  todoPage.addTask(task);

});

When('completing {string}', (task) => {
  todoPage.completeTask(task);
});

Then('I verify {string} is completed', (task) => {
  todoPage.verifyTaskInListandcompleted(task);
});

Given ('{string} is completed', (task) => {
  todoPage.visit();
  todoPage.addTask(task);
  todoPage.completeTask
  todoPage.toggleTask(task);

});

When('I click Clear Completed', () => {
  todoPage.clearCompleted();
});

Then('I verify {string} is not in the list', (task) => {
  todoPage.verifyTaskNotInList(task);

});



