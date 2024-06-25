import LoginPage from '../../support/pom/login_page';
import ProductsPage from '../../support/pom/products_page';

describe('Swaglabs Login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    })    

    it('Login page - Standard User', () => {
        const login_page = new LoginPage()
        const products_page = new ProductsPage()

        login_page.getUserNameInput().type('standard_user')
        login_page.getPasswordInput().type('secret_sauce')
        login_page.getLoginButton().click()

        products_page.getProductList().should('have.length', 6)
    })

    it('Set user name', () => {

    })
})