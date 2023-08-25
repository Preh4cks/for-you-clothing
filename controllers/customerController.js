/**
 * DOCU: The class Users loads the specific view page.
 */

class Customer {
    register(req, res) {
        res.render('../views/customer/register');
    }

    login(req, res) {
        res.render('../views/customer/login');
    }
}

/**
 * DOCU: Export Survey object to routes.
 */

module.exports = new Customer();