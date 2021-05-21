const Locators = require("../../fixtures/Locators.json");
var faker = require("faker");
import { authLogin } from '../../page_objects/loginObject'


describe('negative cases', () => {
    it('visit gallery app', () => {
        cy.visit('')
        cy.get('.ml-auto > :nth-child(1) > .nav-link').click()
    })
    it('pass empty, email empty', () => {
        authLogin.submit.click()
    })
    it('login without email', () => {
        cy.get(Locators.Login.Password).type('as332101')
        cy.get(Locators.Login.Submit).click()
    })
    it('login without password', () => {
        cy.get(Locators.Login.Password).clear()
        cy.get(Locators.Login.Email).type(faker.internet.email())
        cy.get(Locators.Login.Submit).click()
    })
    it('login with wrong password', () => {
        cy.get(Locators.Login.Password).type(faker.internet.password())
        cy.get(Locators.Login.Submit).click()
    })
})
describe('positiv case', () => {
    // it('visit gallery app', () => {
    //     cy.visit('')
    //     cy.get('.ml-auto > :nth-child(1) > .nav-link').click()
    //     cy.get(Locators.Login.Submit).click()
    // })
    it('refresh', () => {
        cy.reload()
    })
    it('valid login', () => {
        authLogin.login("adrijatik1984@gmail.com", "as332101")
    })
})
describe('logout', () => {
    it('logout', () => {

        cy.get(Locators.Login.Logout).click()
    })
})