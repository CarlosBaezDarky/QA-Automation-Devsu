// <reference types="cypress" />

describe('Flujo de compra en SauceDemo', () => {
  const user = {
    username: 'standard_user',
    password: 'secret_sauce',
  };

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type(user.username);
    cy.get('#password').type(user.password);
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html'); // Validación extra
  });

  it('Completar compra con dos productos', () => {
    // Agregar productos
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Validar que el carrito tiene 2 items
    cy.get('.shopping_cart_badge').should('have.text', '2');

    // Ir al carrito
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');

    // Checkout
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Carlos');
    cy.get('[data-test="lastName"]').type('Tester');
    cy.get('[data-test="postalCode"]').type('10101');
    cy.get('[data-test="continue"]').click();

    // Validar que estamos en la página de resumen
    cy.url().should('include', '/checkout-step-two.html');

    // Finalizar compra
    cy.get('[data-test="finish"]').click();

    // Validar mensaje final
    cy.get('.complete-header')
      .should('be.visible')
      .and('contain.text', 'THANK YOU FOR YOUR ORDER');
  });
});
