Feature: Manage tasks in Todo Web

  Scenario: Add a task to the list
    Given I navigate todo page
    When I add task "Tarea1"
    Then I verify I see "Tarea1" is in the list

  Scenario: Complete task
    Given I have "Tarea1" in the list
    When completing "Tarea1"
    Then I verify "Tarea1" is completed

  Scenario: Clear completed tasks
    Given "Tarea1" is completed
    When I click Clear Completed
    Then I verify "Tarea1" is not in the list

 