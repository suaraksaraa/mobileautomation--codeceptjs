Feature: Business rules
  As a user
  I want to be able to add the product & clearing the shopping cart

  Scenario: Add the product & clearing the shopping cart
    Given I have an access flutter gallery
    When I tap the shrine Image
    Then I will be redirected to the login page
    When I click the next button
    Then I will be redirected to all listed product on the shrine detail page
    When I tap the menu
    And click clothing filter
    Then I will see a list of the product of clothing