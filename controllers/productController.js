const db = require('../models/productModel');
/**
 * DOCU: The class Users loads the specific view page.
 */

class ProductController {
    async product(req, res) {
        // const user = await db.getProduct(req.body.email);

        res.render('../views/product/product');
    }

    async createCategory(req, res) {
        await db.createCategory(req.body.category);

        res.redirect('/admin/categories');
    }

    async createProduct(req, res) {
        await db.createProduct(req);

        res.redirect('/admin/products');
    }

    async createProductCategories(req, res) {
        await db.createProductCategories(req);

        res.redirect('/admin/product/' + req.body.product_id);
    }
}

/**
 * DOCU: Export Survey object to routes.
 */

module.exports = new ProductController();

