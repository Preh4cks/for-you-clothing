// const validator = require('../static/lib/validator/validator');
const uniq = require('../static/lib/universal-query/universalQuery');
const xssFilter = require('xss-filters');

class ProductModel {
  // @TODO ADD DESCRIPTION LATER
  getProduct(product_id) {
    const id = xssFilter.inHTMLData(product_id);

    return uniq.queryAll(`SELECT p.*, GROUP_CONCAT(c.name) AS categories
      FROM products p 
      LEFT JOIN product_categories pc ON p.id = pc.products_id
      LEFT JOIN categories c ON pc.categories_id = c.id
      WHERE p.id = ?
      GROUP BY p.id`,
      [id]
    );
  }
  
  // @TODO ADD DESCRIPTION LATER
  getProducts() {
    return uniq.queryAll('SELECT * FROM products');
  }
  
  // @TODO ADD DESCRIPTION LATER
  createProduct(req) {
    const name = xssFilter.inHTMLData(req.body.name);
    const vendor = xssFilter.inHTMLData(req.body.vendor);
    const unit_price = xssFilter.inHTMLData(req.body.unit_price);
    const image_url = xssFilter.inHTMLData(req.body.image_url);
    const description = xssFilter.inHTMLData(req.body.description);
    const inventory_count = xssFilter.inHTMLData(req.body.inventory_count);
    
    // @TODO ADD VALIDATION ERROR
    if (!name && !vendor && !unit_price && !image_url && !description && !inventory_count) {
      return; 
    }

    uniq.queryNone(
      `INSERT INTO products(name, vendor, unit_price, image_url, description, inventory_count, created_at, updated_at)
      VALUES(?, ?, ?, ?, ?, ?, NOW(), NOW());`, 
      [name, vendor, unit_price, image_url, description, inventory_count]
    );
    
    return true;
  }

  // @TODO ADD DESCRIPTION LATER
  getProductCategories(raw_product_id) {
    const product_id = xssFilter.inHTMLData(raw_product_id);

    // @TODO ADD VALIDATION ERROR
    if (!product_id) {
      return; 
    }

    return uniq.queryAll(
      `SELECT * FROM product_categories
      WHERE product_categories.products_id = ?;`,
      [product_id]
    );
  }

  // @TODO ADD DESCRIPTION LATER
  // THIS IS TO ATTACH PRODUCT TO THE PRODUCT CATEGORY
  async createProductCategories(req) {
    const product_id = xssFilter.inHTMLData(req.body.product_id);
    const category_id = xssFilter.inHTMLData(req.body.category_id);

    // @TODO ADD VALIDATION ERROR
    if (!product_id && !category_id) {
      return; 
    }

    const CATEGORIES = await this.getProductCategories(product_id);

    if(!this.isProductCategoryIdExists(category_id, CATEGORIES)) {
      uniq.queryNone(
        `INSERT INTO product_categories(categories_id, products_id, created_at, updated_at)
        VALUES(?, ?, NOW(), NOW());`, 
        [category_id, product_id]
      );
  
      return true;
    }

    return false;
  }

  // @TODO ADD DESCRIPTION LATER
  getCategories() {
    return uniq.queryAll('SELECT * FROM categories ORDER BY name');
  }

  // @TODO ADD DESCRIPTION LATER
  async createCategory(raw_category) {
    const category = xssFilter.inHTMLData(raw_category);

    // @TODO ADD VALIDATION ERROR
    if (!category) {
      return; 
    }

    const CATEGORIES = await this.getCategories();

    if(!this.isCategoryNameExists(category, CATEGORIES)) {
      uniq.queryNone(
        `INSERT INTO categories(name, created_at, updated_at)
        VALUES(?, NOW(), NOW());`, 
        [category.toLowerCase()]
      );

      return true;
    }

    return false;
  }

  // CHECK IF CATEGORY ALREADY EXISTS @ FIX LATER 
  isCategoryNameExists(name, list) {
    return list.some(category => category.name.toLowerCase() == name.toLowerCase());
  }

  // CHECK IF CATEGORY ALREADY EXISTS @ FIX LATER 
  isProductCategoryIdExists(id, list) {
    return list.some(product_category => product_category.categories_id == id);
  }

  // @TODO ADD DESCRIPTION LATER
  updateCategory(raw_category_id, raw_category) {
    const category_id = xssFilter.inHTMLData(raw_category_id);
    const category = xssFilter.inHTMLData(raw_category);

    uniq.queryNone(
      `UPDATE categories SET name = ?, updated_at = ? WHERE ID = ?;`, 
      [category, category_id]
    );

    return true;
  }

  // @TODO ADD DESCRIPTION LATER
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