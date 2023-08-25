const db = require('../models/productModel');
/**
 * DOCU: The class Users loads the specific view page.
 */

class ProductController {
    product(req, res) {
        res.render('../views/product/product');
    }
}

/**
 * DOCU: Export Survey object to routes.
 */

module.exports = new ProductController();

