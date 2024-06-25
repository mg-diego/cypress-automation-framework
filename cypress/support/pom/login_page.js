class LoginPage {

    getUserNameInput() {
        return cy.get('[data-test="username"]')
    }

    getPasswordInput() {
        return cy.get('[data-test="password"]')
    }

    getLoginButton() {
        return cy.get('#login-button')
    }
}

export default LoginPage