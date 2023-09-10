const validator = require('../static/lib/validator/validator');
const uniq = require('../static/lib/universal-query/universalQuery');
const xssFilter = require('xss-filters');

class ProductModel {
  getProduct(product_id) {
    const id = xssFilter.inHTMLData(product_id);
    
    return uniq.queryAll('SELECT * FROM products WHERE id = ?', [id]);
  }

  getProducts() {
    return uniq.queryAll('SELECT * FROM products');
  }

  createProduct(req) {
    const name = xssFilter.inHTMLData(req.body.name);
    const vendor = xssFilter.inHTMLData(req.body.vendor);
    const unit_price = xssFilter.inHTMLData(req.body.unit_price);
    const description = xssFilter.inHTMLData(req.body.description);
    const inventory_count = xssFilter.inHTMLData(req.body.inventory_count);

    uniq.queryNone(
      `INSERT INTO products(name, vendor, unit_price, description, inventory_count, created_at, updated_at)
       VALUES(?, ?, ?, ?, ?, NOW(), NOW());`, 
      [name, vendor, unit_price, description, inventory_count]
    );

    return true;
  }

  createProductCategories(req) {
    const product_id = xssFilter.inHTMLData(req.body.product_id);
    const category_id = xssFilter.inHTMLData(req.body.category_id);

    uniq.queryNone(
      `INSERT INTO product_categories(categories_id, products_id, created_at, updated_at)
       VALUES(?, ?, NOW(), NOW());`, 
      [category_id, product_id]
    );

    return true;
  }

  getCategories() {
    return uniq.queryAll('SELECT * FROM categories');
  }

  createCategory(raw_category) {
    const category = xssFilter.inHTMLData(raw_category);

    uniq.queryNone(
      `INSERT INTO categories(name, created_at, updated_at)
       VALUES(?, NOW(), NOW());`, 
      [category]
    );

    return true;
  }

  updateCategory(raw_category_id, raw_category) {
    const category_id = xssFilter.inHTMLData(raw_category_id);
    const category = xssFilter.inHTMLData(raw_category);

    uniq.queryNone(
      `UPDATE categories SET name = ?, updated_at = ? WHERE ID = ?;`, 
      [category, category_id]
    );

    return true;
  }

  deleteCategory(raw_category_id) {
    const category_id = xssFilter.inHTMLData(raw_category_id);

    uniq.queryNone(
      `DELETE FROM categories WHERE ID = ?;`, 
      [category_id]
    );

    return true;
  }





}

module.exports = new ProductModel();