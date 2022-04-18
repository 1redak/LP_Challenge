// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const username = '123khader123'
const password = 'Khader123!@#'

//i created my own login from the Ui to call the login api.

Cypress.Commands.add("login", () => {
    cy.request({
        method: 'POST',
        url: 'https://sso.pokemon.com/sso/login?locale=en&service=https://club.pokemon.com/us/pokemon-trainer-club/caslogin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: true,
        body: { username: username, password: password },
    })
        .then((resp) => {
            expect(resp.status).to.eq(200)
        })
})

