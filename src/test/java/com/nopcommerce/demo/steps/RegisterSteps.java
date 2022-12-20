package com.nopcommerce.demo.steps;
// **** Created By Harshit Patel ****

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }
    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I should navigate to register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {
        Assert.assertEquals("register page not displayed", "Register", new RegisterPage().getRegisterText());
    }

    @Then("^Verify the firstName error message$")
    public void verifyTheFirstNameErrorMessage() {
        Assert.assertEquals("FirstName field error message not displayed", "First name is required.", new RegisterPage().getValidationErrorMessageForField("FirstName"));
    }

    @And("^Verify the lastName error message$")
    public void verifyTheLastNameErrorMessage() {
        Assert.assertEquals("LastName field error message not displayed", "Last name is required.", new RegisterPage().getValidationErrorMessageForField("LastName"));
    }

    @And("^Verify the email error message$")
    public void verifyTheEmailErrorMessage() {
        Assert.assertEquals("Email field error message not displayed", "Email is required.", new RegisterPage().getValidationErrorMessageForField("Email"));
    }

    @And("^Verify the password error message$")
    public void verifyThePasswordErrorMessage() {
        Assert.assertEquals("Password field error message not displayed", "Password is required.", new RegisterPage().getValidationErrorMessageForField("Password"));
    }

    @And("^Verify the confirmPassword error message$")
    public void verifyTheConfirmPasswordErrorMessage() {
        Assert.assertEquals("ConfirmPassword field error message not displayed", "Password is required.", new RegisterPage().getValidationErrorMessageForField("ConfirmPassword"));
    }

    @And("^I click on female radio Button$")
    public void iClickOnFemaleRadioButton() {
        new RegisterPage().selectGender("Female");
    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstname) {
        new RegisterPage().enterFirstName(firstname);
    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lastname) {
        new RegisterPage().enterLastName(lastname);
    }

    @And("^I enter emailid \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new RegisterPage().enterEmail(email);
    }

    @And("^I enter password1 \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new RegisterPage().enterPassword(password);
    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String cpassword) {
        new RegisterPage().enterConfirmPassword(cpassword);
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }



    @And("^I select date of birth \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iSelectDateOfBirth(String day, String month, String year) {
        new RegisterPage().selectDateOfBirth(day, month, year);
    }

    @Then("^I should get registration successful \"([^\"]*)\"$")
    public void iShouldGetRegistrationSuccessful(String text) {
        Assert.assertEquals("test ", text, new RegisterPage().getYourRegCompletedText());

    }

   /* @Then("^I should get registration successful \"([^\"]*)\"$")
    public void iShouldGetRegistrationSuccessful(String exp)  {
        Assert.assertEquals("test ", exp, new RegisterPage().getYourRegCompletedText());
    }*/

 /*   @Then("^registration successful \"([^\"]*)\"$")
    public void iregistrationSuccessful(String exp)  {
        Assert.assertEquals(" ", exp, new RegisterPage().getYourRegCompletedText());
    }*/
}