// const validator = require('../static/lib/validator/validator');
const uniq = require('../static/lib/universal-query/universalQuery');
const rankingSort = require('../static/lib/ranking-sort/rankingSort');
const xssFilter = require('xss-filters');
const fs = require('fs');
const DATASET = JSON.parse(fs.readFileSync('datasets/ranking_sort_v3.json', 'utf8'));
let weights;

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
  async getProducts(data) {
    let sort_by = "";
    
    switch(data.data.sort_key) {
      case "featured":
        sort_by = "p.id ASC;";
        break;
      case "most_recent":
        sort_by = "p.id DESC;";
        break;
      case "a_to_z":
        sort_by = "p.name ASC;";
        break;
      case "z_to_a":
        sort_by = "p.name DESC;";
        break;
      case "a_to_z":
        sort_by = "p.name DESC;";
        break;
      case "lowest_to_highest":
        sort_by = "p.discounted_price ASC;";
        break;
      case "highest_to_lowest":
        sort_by = "p.discounted_price DESC;";
        break;
      default:
        sort_by = "p.id ASC;";
        break;
    }

    return (await uniq.queryAll(
      `SELECT p.*, GROUP_CONCAT(c.name) AS categories
      FROM products p 
      LEFT JOIN product_categories pc ON p.id = pc.products_id
      LEFT JOIN categories c ON pc.categories_id = c.id
      GROUP BY p.id 
      ORDER BY ${sort_by}`
    )); 
  }
  
  // @TODO ADD DESCRIPTION LATER
  createProduct(req) {
    const name = xssFilter.inHTMLData(req.body.name);
    const vendor = xssFilter.inHTMLData(req.body.vendor);
    const unit_price = xssFilter.inHTMLData(req.body.unit_price);
    const discounted_price = xssFilter.inHTMLData(req.body.unit_price);
    const image_url = xssFilter.inHTMLData(req.body.image_url);
    const description = xssFilter.inHTMLData(req.body.description);
    const inventory_count = xssFilter.inHTMLData(req.body.inventory_count);
    
    // @TODO ADD VALIDATION ERROR
    if (!name && !vendor && !unit_price && !image_url && !description && !inventory_count) {
      return; 
    }

    uniq.queryNone(
      `INSERT INTO products(name, vendor, unit_price, discounted_price, rating, image_url, description, inventory_count, created_at, updated_at)
      VALUES(?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW());`, 
      [name, vendor, unit_price, discounted_price, 0.5, image_url, description, inventory_count]
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

  async getSortedProducts(customer, data, req) {
    console.log(req.session.product);
    let products = await this.getProducts(data);
    products.forEach(product => {
      if(product.categories) {
        product.tags = product.categories.split(",");
      } else {
        product.tags = "";
      }
      product.discounted_price = parseFloat(product.discounted_price);
      product.unit_price = parseFloat(product.unit_price);
      product.rating = parseFloat(product.rating);
    });
    
    const HIGHEST_PRICE = rankingSort.getHighestPrice(products);
    const OLDEST_CUSTOMER = 60;
    const YOUNGEST_CUSTOMER = 16;
    const AVERAGE_VALUE = 0.5;

    let customer_age_value = AVERAGE_VALUE;
    let customer_gender = AVERAGE_VALUE;

    if (customer.gender == "male") {
      customer_gender = 1;
    } else if(customer.gender == "female") {
      customer_gender = 0;
    }
    customer_age_value = rankingSort.getPercentValue(OLDEST_CUSTOMER, YOUNGEST_CUSTOMER, customer.age || AVERAGE_VALUE);
    const text = data.data.string;
    
    for(let i = 0; i < products.length; i++) {
      // Price=, Reviews=, Discount, Tags, Text, Age, Gender,
      let highest_price_value = rankingSort.getPercentValue(HIGHEST_PRICE, 0, products[i].discounted_price);
      let reviews_value = products[i].rating;
      let discount_value = rankingSort.getPercentValue(products[i].unit_price, 0, products[i].discounted_price);
      // let tag_score = Number(products[i].tags.includes($('#tags').val()));
      let text_score = rankingSort.getMatchScore(products[i].name, text);
      let tag_score = 1;
      // let text_score = 1;
      let gender_matches = rankingSort.matchGender(customer_gender, products[i].tags);
      let current_product = [highest_price_value, reviews_value, discount_value, tag_score, text_score, customer_age_value, gender_matches];
      let rank = rankingSort.adjust(rankingSort.sigmoid(rankingSort.dotProduct(current_product, weights)));
      products[i].sort_score = rank;
      products[i].text_score = text_score;
      products[i].category_score = rankingSort.calculateMatchScore((req.session.product) ? req.session.product.categories.split(",") : [], products[i].tags);
    }
    products.sort((product, pivot_product) => {
      return pivot_product.sort_score - product.sort_score;
    });

    if(text) {
      products.sort((product, pivot_product) => {
        return pivot_product.text_score - product.text_score;
      });
    } else {
      products.sort((product, pivot_product) => {
        return pivot_product.category_score - product.category_score;
      });
    }

    return products;
  }

  
  trainModel() {
    const TRAIN_DATASET = DATASET.data;
    // console.log(TRAIN_DATASET);
    // Learning Rate for lowest Cost Function [0.01 - 1]
    const LEARNING_RATE = 0.1;
    // Learning Itterations for lowest Cost Function [1 - 500] 420
    const LEARNING_ITTERATIONS = 420;

    // Extract features and labels from the dataset
    const features = TRAIN_DATASET.map((data) => data.features);
    const labels = TRAIN_DATASET.map((data) => data.label);
  
    // Initialize weights with zeros
    const numFeatures = features[0].length;
    weights = new Array(numFeatures).fill(0);
    
    console.log(rankingSort.gradientDescent(features, labels, weights, LEARNING_RATE, LEARNING_ITTERATIONS));
    // console.log(weights);

    // const tests_cases = [    
    //   { "features": [0.96, 0.57, 0.63, 0.94, 0.76, 0.20, 0], "label": 0 },
    //   { "features": [0.32, 0.89, 0.12, 0.50, 0.50, 0.65, 1], "label": 1 },
    //   { "features": [0.78, 0.23, 0.05, 0.50, 0.50, 0.82, 0], "label": 0 },
    //   { "features": [0.15, 0.95, 0.48, 0.50, 0.50, 0.18, 1], "label": 1 },
    //   { "features": [0.55, 0.68, 0.29, 0.50, 0.50, 0.35, 0], "label": 0 },
    //   { "features": [0.81, 0.41, 0.37, 0.50, 0.50, 0.71, 1], "label": 0 },
    //   { "features": [0.27, 0.76, 0.59, 0.50, 0.50, 0.09, 0], "label": 1 },
    //   { "features": [0.64, 0.35, 0.18, 0.50, 0.50, 0.52, 1], "label": 0 },
    //   { "features": [0.49, 0.59, 0.72, 0.50, 0.50, 0.93, 0], "label": 1 },
    //   { "features": [0.98, 0.11, 0.25, 0.50, 0.50, 0.46, 1], "label": 0 },
    // ];

    // console.log("test");
    // let average = 0;
    // for(let i = 0; i < tests_cases.length; i++) {
    //   let asd = rankingSort.adjust(rankingSort.sigmoid(rankingSort.dotProduct(tests_cases[i].features, weights)));
    //   console.log(asd);
    //   if(((asd > 0.5) && (tests_cases[i].label == 1)) || ((asd < 0.5) && (tests_cases[i].label == 0))) {
    //     average += 1;
    //   }
    // }
    // console.log("AVERAGE: " + average);

  }
}

module.exports = new ProductModel();