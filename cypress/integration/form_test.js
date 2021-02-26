describe('Sprint Test', () => {

  const sizeMenu = () => cy.get('select[name="size"]')
  const sauceMenu = () => cy.get('input[value="buffalo"]')
  const cheese = () => cy.get('input[name="cheese"]')
  const peppy = () => cy.get('input[name="pepperoni"]')
  const nameInput = () => cy.get('input[name="name"]')
  const checkWings = () => cy.get('input[name="wings"]')
  const submitButton = () => cy.get('button[type="submit"]')

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('a[id="pizzaLink"]').click()
  })

  it("Test that Submit button is disabled", () => {
    submitButton().should('be.disabled')
  })

  it("Test form", () => {
    nameInput()
      .type('Nardwuar, the Human Serviette')
    .should('have.value', 'Nardwuar, the Human Serviette')
    sizeMenu()
      .select('24')
    .should('have.value', '24')
    sauceMenu()
      .check()
      .should('have.value', 'buffalo')
    cheese()
      .check()
    .should('have.value', 'true')
    peppy()
      .check()
    .should('have.value', 'true')
    checkWings()
      .check()
      .should('have.value', 'true')
    
      it("Test Submit Button", () => {
        submitButton().click()
      })
  })


})