Feature: User Authentication tests

  Background:
    Given User navigates to the application

  Scenario: Login should be success
    And User enter the username as "casperez"
    And User enter the password as "Secrets@0429"
    When User click on the login button
    And User is redirected to Preferences
    Then Login should be success

  Scenario: Login should not be successful
    Given User enter the username as "cass"
    Given User enter the password as "Secrets@0429"
    When User click on the login button
    But Login should fail