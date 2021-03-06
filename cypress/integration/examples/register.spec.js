const Locators = require("../../fixtures/Locators.json");
var helper = require('../../support/helper');
var faker = require("faker");
describe('negative cases', () => {
        it('visit gallery app', () => {
            cy.visit('')
            cy.get(':nth-child(2) > .nav-link').click()
        })
        it('all empty', () => {
            cy.get(Locators.Register.Submit).click()
        })
        it('all spaces', () => {
            cy.get(Locators.Register.FirstName).type('  ')
            cy.get(Locators.Register.LastName).type('  ')
            cy.get(Locators.Register.Password).type('  ')
            cy.get(Locators.Register.Check).check()
            cy.get(Locators.Register.Submit).click()
        })
        it('maximum caracters on first and last name', () => {
            cy.get(Locators.Register.FirstName).clear().type(helper.getNCharactersLetters(256))
            cy.get(Locators.Register.LastName).clear().type(helper.getNCharactersLetters(256))
            cy.get(Locators.Register.Email).clear().type('aaa@gmail.com')
            cy.get(Locators.Register.Password).clear().type('aaa11111')
            cy.get('#password-confirmation').clear().type('aaa11111')
            cy.get('[type="checkbox"]').check()
            cy.get('.btn').click()
        })
        it('wrong email format-without @', () => {
            cy.get('#first-name').clear().type('aaaaaa')
            cy.get('#last-name').clear().type('bbbbbb')
            cy.get('#email').clear().type('aaagmail.com')
            cy.get('#password').clear().type('aaa11111')
            cy.get('#password-confirmation').clear().type('aaa11111')
            cy.get('[type="checkbox"]').check()
            cy.get('.btn').click()
        })
        it('wrong email format-without .', () => {
            cy.get('#first-name').clear().type('aaaaaa')
            cy.get('#last-name').clear().type('bbbbbb')
            cy.get('#email').clear().type('aaagmail@com')
            cy.get('#password').clear().type('aaa11111')
            cy.get('#password-confirmation').clear().type('aaa11111')
            cy.get('[type="checkbox"]').check()
            cy.get('.btn').click()
        })
        it('confirmetPass does not match', () => {
            cy.get('#first-name').clear().type('aaaaaa')
            cy.get('#last-name').clear().type('bbbbbb')
            cy.get('#email').clear().type('aaag@mail.com')
            cy.get('#password').clear().type('aaa11111')
            cy.get('#password-confirmation').clear().type('aaa11112')
            cy.get('[type="checkbox"]').check()
            cy.get('.btn').click()
        })
        it('password less than 8 characters', () => {
            cy.get('#first-name').clear().type('aaaaaa')
            cy.get('#last-name').clear().type('bbbbbb')
            cy.get('#email').clear().type('aaag@mail.com')
            cy.get('#password').clear().type('aaa1111')
            cy.get('#password-confirmation').clear().type('aaa1111')
            cy.get('[type="checkbox"]').check()
            cy.get('.btn').click()
        })
        it('password only letters', () => {
            cy.get('#first-name').clear().type('aaaaaa')
            cy.get('#last-name').clear().type('bbbbbb')
            cy.get('#email').clear().type('aaag@mail.com')
            cy.get('#password').clear().type('aaaaaaaa')
            cy.get('#password-confirmation').clear().type('aaaaaaaa')
            cy.get('[type="checkbox"]').check()
            cy.get('.btn').click()
        })
        it('password only numbers', () => {
                cy.get('#first-name').clear().type('aaaaaa')
                cy.get('#last-name').clear().type('bbbbbb')
                cy.get('#email').clear().type('aaag@mail.com')
                cy.get('#password').clear().type('11111111')
                cy.get('#password-confirmation').clear().type('11111111')
                cy.get('[type="checkbox"]').check()
                cy.get('.btn').click()
            })
            //   ovaj ispod test se stavlja poslednji jer ima bug, registruje se sa minimum karaktera-1
        it('min caracters on first and last name', () => {
            cy.get('#first-name').clear().type(helper.getNCharactersLetters(1))
            cy.get('#last-name').clear().type(helper.getNCharactersLetters(1))
            cy.get('#email').clear().type('aaa@gmail.com')
            cy.get('#password').clear().type('aaa11111')
            cy.get('#password-confirmation').clear().type('aaa11111')
            cy.get('[type="checkbox"]').check()
            cy.get('.btn').click()
        })
    })
    // kod poz case-ova cemo koristiti beforeEach,zato sto kad se jednom registrujem, ne mogu ponovo da radim na register stranici
describe('positive case', () => {
    beforeEach(function() {
        cy.visit('')
        cy.get(':nth-child(2) > .nav-link').click()
    });
    it.only('smoke test', () => {
        var email = "nin" + Math.floor(Math.random() * 10000) + "@gmail.com"
        cy.get('#first-name').clear().type('nina')
        cy.get('#last-name').clear().type('ninic')
        cy.get('#email').clear().type(faker.internet.email())
        cy.get('#password').clear().type('as332101')
        cy.get('#password-confirmation').clear().type('as332101')
        cy.get('[type="checkbox"]').check()
        cy.get('.btn').click()
    })
    it('unicode caracter', () => {
            var email = "nin" + Math.floor(Math.random() * 10000) + "@gmail.com"
            cy.get('#first-name').clear().type('??????????')
            cy.get('#last-name').clear().type('??????????')
            cy.get('#email').clear().type(email)
            cy.get('#password').clear().type('as332101')
            cy.get('#password-confirmation').clear().type('as332101')
            cy.get('[type="checkbox"]').check()
            cy.get('.btn').click()
        })
        //  ?????????????? ???????? ?????? ?????????? ???? ?????????? ??????????????
    it('space on password', () => {
        var email = "nin" + Math.floor(Math.random() * 10000) + "@gmail.com"
        cy.get('#first-name').clear().type('nina')
        cy.get('#last-name').clear().type('ninic')
        cy.get('#email').clear().type(email)
        cy.get('#password').clear().type('as332101 ')
        cy.get('#password-confirmation').clear().type('as332101 ')
        cy.get('[type="checkbox"]').check()
        cy.get('.btn').click()
    })
    it('negative case with exisiting email', () => {
        var email = "nin" + Math.floor(Math.random() * 10000) + "@gmail.com"
        cy.get('#first-name').clear().type('nina')
        cy.get('#last-name').clear().type('ninic')
        cy.get('#email').clear().type(email)
        cy.get('#password').clear().type('as332101')
        cy.get('#password-confirmation').clear().type('as332101')
        cy.get('[type="checkbox"]').check()
        cy.get('.btn').click()
        cy.visit('')
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('#first-name').clear().type('nina')
        cy.get('#last-name').clear().type('ninic')
        cy.get('#email').clear().type(email)
        cy.get('#password').clear().type('as332101')
        cy.get('#password-confirmation').clear().type('as332101')
        cy.get('[type="checkbox"]').check()
        cy.get('.btn').click()
    })
})