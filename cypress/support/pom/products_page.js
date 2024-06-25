class ProductsPage {
    getProductList() {
        return cy.get('.inventory_item_name')
    }
}

export default ProductsPage