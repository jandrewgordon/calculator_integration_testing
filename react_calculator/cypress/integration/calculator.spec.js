describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the running total when buttons are pressed', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
  })

  it('should display is updated with new total', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should be able to chain operations', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10')
  })

  it('should function as normal for negative, decimal and very large numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10')
  })


})