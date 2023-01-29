describe("E2E Game Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Player X wins", () => {
    [0, 1, 3, 4, 6].map((index) => {
      cy.dataCy(`board-block-${index}`).click();
    });
    cy.dataCy("winner-player").contains("X");
  });

  it("Reset", () => {
    [0, 1, 3].map((index) => {
      cy.dataCy(`board-block-${index}`).click();
    });
    cy.dataCy(`reset-board`).click();

    for (let i = 0; i < 9; i++) {
      cy.dataCy(`board-block-${i}`)
        .children()
        .should("have.text", "");
    }
  });

  it("Draw result", () => {
    [0, 1, 2, 6, 7, 8, 3, 4, 5].map((index) => {
      cy.dataCy(`board-block-${index}`).click();
    });
    cy.dataCy("winner-player").contains(
      "It's a draw"
    );
  });

  context("Errors", () => {
    const errorMsg =
      "An error has occurred while communicating with the server.";
    it("Test error handling", () => {
      cy.intercept("POST", "**/get-winner", {
        statusCode: 500,
      }).as("getNetworkFailure");

      [0].map((index) => {
        cy.dataCy(`board-block-${index}`).click();
      });

      cy.wait("@getNetworkFailure");

      cy.contains(errorMsg).should("be.visible");
    });
  });
});

export {};
