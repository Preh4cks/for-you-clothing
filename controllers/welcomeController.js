/**
 * DOCU: The class Users loads the specific view page.
 */

class Welcome {
    /**
     * DOCU: Loads the index page.
     */

    index(req, res) {
        res.render('../views/welcome/index');
    }
}

/**
 * DOCU: Export Survey object to routes.
 */

module.exports = new Welcome();