@Regression
Feature: Register Test
  As user I want to register on nop commerce website

  @Smoke
  Scenario: Verify user should navigate to register page successfully
    Given I am on homepage
    When I click on register link
    Then I should navigate to register page successfully

  @Sanity
  Scenario:Verify thatFirstName LastName Email Password And ConfirmPassword Fields Are Mandatory
    Given I am on homepage
    And I click on register link
    And I click on register button
    Then Verify the firstName error message
    And Verify the lastName error message
    And Verify the email error message
    And Verify the password error message
    And Verify the confirmPassword error message


  @smoke
  Scenario: User should create account successfully
    Given I am on homepage
    When I click on register link
    And I click on female radio Button
    And I enter first name "Raja"
    And I enter last name "Ram"
    And I select date of birth "22","January","1980"
    And I enter emailid "Rajaram123@gmail.com"
    And I enter password1 "abc123"
    And I enter confirm password "abc123"
    And I click on register button
    Then I should get registration successful "Your registration completed"
