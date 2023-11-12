const user_db = require('../models/userModel');
const product_db = require('../models/productModel');

/**
 * DOCU: The class Users loads the specific view page.
 */

class UserController {
    /**
     * DOCU: Loads the index page.
     */

    async index(req, res) {
        const products = await product_db.getProducts();

        if(!req.session.user) {
            res.render('../views/user/index', { user: {}, products: products });
            return;
        }

        const user = req.session.user[0];

        res.render('../views/user/index', { user: user, products: products });
    }

    login(req, res) {
        const user = req.session.user;
        const errors = req.session.errors || {};
        req.session.errors = {};
        if(user) {
            res.redirect('/account');
            return;
        }
        
        res.render('../views/user/login', { errors: errors });
    }

    register(req, res) {
        if(!req.session) {
            res.redirect('/');
        }

        const user = req.session.user;
        const errors = req.session.errors || {};
        req.session.errors = {};
        if(user) {
            res.redirect('/account');
            return;
        }

        res.render('../views/user/register', { errors: errors });
    }

    async validate(req, res) {
        const action =  req.body.action;

        if(!req.session.errors) {
            if(action == 'login') { 
                res.redirect('/login');
            } else {
                res.redirect('/register');
            }

            return;
        }

        if(action == 'login') {
            const user = await user_db.getUser(req.body.email);
            const isValidCredentials = user_db.validateUser(req, user); 

            if(isValidCredentials) { // Check if valid credentials
                res.redirect('/account');
                return;
            }

            req.session.errors['message'] = "Invalid Credentials";
            res.redirect('/login');
            return;
        } else if(action == 'register') {
            const user = await user_db.getUser(req.body.email);

            if(user[0]) {
                req.session.errors['message'] = "Email Already Exists!";
            } else {
                user_db.addUser(req);
            }
            res.redirect('/register');
            return;
        } 

        res.redirect('/');
    }

    account(req, res) {
        if(!req.session.user) {
            res.redirect('/login');
        }

        const user = req.session.user[0];
        if(!user) {
            res.redirect('/login');
            return;
        }
        
        res.render('../views/user/account', { user: user });
    }

    logout(req, res) {
        req.session.user = undefined;

        res.redirect('/');
    }

    async admin(req, res) {
        res.render('../views/user/admin');
    }
}

/**
 * DOCU: Export Survey object to routes.
 */

module.exports = new UserController();