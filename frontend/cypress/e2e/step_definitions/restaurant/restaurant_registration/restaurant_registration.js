import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Given the user access the home page
Given("the user access the home page", () => {
    cy.visit("http://localhost:3000");
});

// When the user goes to the restaurant section
When("the user goes to the restaurant section", () => {});

// Then teh app should show the restaurant section
Then("teh app should show the restaurant section", () => {});
