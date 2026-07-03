Feature: Add Employee

  Scenario: Add Employee Successfully

    Given User launches OrangeHRM application
    When User enters username "Admin"
    And User enters password "admin123"
    And User clicks Login button
    Then User should navigate to Dashboard

    When User clicks PIM
    And User clicks Add Employee
    And User enters employee details
    Then Employee should be added successfully

    When User searches the employee
    Then Employee should appear in search results