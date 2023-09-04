const validator = require('../static/lib/validator/validator');
const uniq = require('../static/lib/universal-query/universalQuery');
const xssFilter = require('xss-filters');

class ProductModel {
  getProduct(product_id) {
    const id = xssFilter.inHTMLData(product_id);
    return uniq.queryAll('SELECT * FROM product WHERE id = ?', [id]);
  }

  getProducts() {
    return uniq.queryAll('SELECT * FROM products');
  }
}

module.exports = new ProductModel();