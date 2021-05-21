describe('negative cases', () => {
    it('visit gallery app', () => {
        cy.visit('')
        cy.get('.ml-auto > :nth-child(1) > .nav-link').click()
    })
    it('pass empty email empty', () => {
        cy.get('.btn').click()
    })
    it('login without email', () => {
        cy.get('#password').type('as332101')
        cy.get('.btn').click()
    })
    it('login without password', () => {
        cy.get('#password').clear()
        cy.get('#email').type('adrijatik1984@gmail.com')
        cy.get('.btn').click()
    })
    it('login with wrong password', () => {
        cy.get('#password').type('aaaaaaa')
        cy.get('.btn').click()
    })
})
describe('positiv case', () => {
    // it('visit gallery app', () => {
    //     cy.visit('')
    //     cy.get('.ml-auto > :nth-child(1) > .nav-link').click()
    //     cy.get('.btn').click()
    // })
    it('refresh', () => {
        cy.reload()
    })
    it('valid login', () => {
        cy.get('#email').type('adrijatik1984@gmail.com')
        cy.get('#password').type('as332101')
        cy.get('.btn').click()
    })
})
describe('logout', () => {
    it('logout', () => {

        cy.get('.ml-auto > :nth-child(3) > .nav-link').click()
    })
})