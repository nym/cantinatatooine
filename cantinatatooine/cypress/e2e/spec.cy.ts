/// <reference types="cypress" />
export {};

describe("App", () => {
  beforeEach(() => {
    cy.intercept('/api/people/', { fixture: 'people.json' }).as('people')
    cy.intercept('/api/films/', { fixture: 'films.json' }).as('films')
    cy.intercept('/api/planets/', { fixture: 'planets.json' }).as('planets')
  });

  it("Can at a bare minimum- load", () => {
    cy.visit("");

    //  Verify that the value has been updated
    cy.get("h2").contains("STAR WARS: THE API");
  });

  it("List characters from the Star Wars universe", () => {
    cy.visit("/people");

    // wait on this request to finalize
    cy.wait('@films')

    cy.get("#root").contains("Luke Skywalker");
  });

  it("List view should include name, gender, and home planet", () => {
    cy.visit("/people");

    cy.wait('@films')

    cy.get(".personListPage").contains("Luke Skywalker");
    cy.get(".personListItem").contains("Gender: male");
    cy.get(".personListItem").contains("Homeworld: Tatooine");
    cy.get(".personListItem").contains(
      "Films: A New Hope, The Empire Strikes Back, Return of the Jedi, Revenge of the Sith"
    );
  });

  it("Clicking a list entry should navigate to the character details page", () => {
    cy.visit("/people");

    cy.wait('@films')
    
    cy.get(".personListItem").contains("Luke Skywalker").click();
    cy.get(".personDetailPage").contains("Luke");
  });

  it("Can load the detail page", () => {
    cy.visit("/person/10/");

    cy.get("h1").contains("Obi-Wan Kenobi");
  });

  it("Detail should include name, hair colour, eye colour, homeworld, and films the character has appeared in", () => {
    cy.visit("/person/10/");

    cy.get("h1").contains("Obi-Wan Kenobi");
    // quick and dirty selectors
    cy.get(".personDetailPage").contains("Eye Colour: blue-gray");
    cy.get(".personDetailPage").contains("Hair Colour: auburn, white");
    cy.get(".personDetailPage").contains(
      "Films: A New Hope, The Empire Strikes Back, Return of the Jedi, The Phantom Menace, Attack of the Clones, Revenge of the Sith"
    );
  });
});
