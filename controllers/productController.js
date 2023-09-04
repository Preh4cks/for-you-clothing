const db = require('../models/productModel');
/**
 * DOCU: The class Users loads the specific view page.
 */

class ProductController {
    async product(req, res) {
        // const user = await db.getProduct(req.body.email);

        res.render('../views/product/product');
    }
}

/**
 * DOCU: Export Survey object to routes.
 */

module.exports = new ProductController();

