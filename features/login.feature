Feature: OrangeHRM Login
@Login
  Scenario: Login Successfully

    Given User launches OrangeHRM application
    When User enters username "Admin"
    And User enters password "admin123"
    And User clicks Login button
    Then User should navigate to Dashboard