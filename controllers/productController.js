const db = require('../models/productModel');

/**
 * DOCU: The class Users loads the specific view page.
 */

class ProductController {
    async product(req, res) {
        // const user = await db.getProduct(req.body.id);
        
        res.render('../views/product/product');
    }

    async createCategory(req, res) {
        await db.createCategory(req.body.category);

        res.redirect('/admin/product/' + req.body.product_id);
        // res.redirect('/admin/product/' + req.body.product_id);
    }

    // @TODO ADD DESCRIPTION LATER
    async createProduct(req, res) {
        await db.createProduct(req);
        
        res.redirect('/admin/products');
    }
    
    // @TODO ADD DESCRIPTION LATER
    async createProductCategories(req, res) {
        await db.createProductCategories(req);

        res.redirect('/admin/product/' + req.body.product_id);
    }    
    
    // @TODO ADD DESCRIPTION LATER
    async adminProducts(req, res) {
        const products = await db.getProducts();
        
        res.render('../views/user/adminProducts', {products: products});
    }

    // @TODO ADD DESCRIPTION LATER
    async adminProduct(req, res) {
        const product = (await db.getProduct(req.params.product_id))[0];
        const categories = await db.getCategories();

        res.render('../views/user/adminProduct', {product: product, categories: categories});
    }
}

/**
 * DOCU: Export Survey object to routes.
 */

module.exports = new ProductController();

