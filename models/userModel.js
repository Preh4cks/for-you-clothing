const validator= require('../static/lib/validator/validator');
const uniq = require('../static/lib/universal-query/universalQuery');
const crypto = require('crypto');
const md5 = require('md5');
const xssFilter = require('xss-filters');
const nodemailer = require('nodemailer');

/**
 * DOCU: Class Database
 */

class UserModel {
    /**
     * DOCU: Get User Input from Database
     * returns a promise
     */

    getUser(raw_email) {
        const email = xssFilter.inHTMLData(raw_email);
        return uniq.queryAll('SELECT * FROM customers WHERE email = ?', [email]);
    }

    /**
     * DOCU: Add the user to Database and display error messages
     * returns undefined
     */

    addUser(req) {
        const first_name = xssFilter.inHTMLData(req.body.first_name);
        const last_name = xssFilter.inHTMLData(req.body.last_name);
        const email = xssFilter.inHTMLData(req.body.email);
        const contact = xssFilter.inHTMLData(req.body.contact);
        const pass = xssFilter.inHTMLData(req.body.password);
        const c_pass = xssFilter.inHTMLData(req.body.confirm_password);
        const birthdate = xssFilter.inHTMLData(req.body.birthdate);
        const gender = xssFilter.inHTMLData(req.body.gender);
        const address = xssFilter.inHTMLData(req.body.address);
        const city = xssFilter.inHTMLData(req.body.city);
        const state = xssFilter.inHTMLData(req.body.state);
        const zip = xssFilter.inHTMLData(req.body.zip);

        validator.setField('First Name', first_name).isAlpha().isLength({ min:3 });
        validator.setField('Last Name', last_name).isAlpha().isLength({ min:3 });
        validator.setField('Email', email).isEmail();
        validator.setField('Contact', contact).isLength({ min:10 });
        validator.setField('Password', pass).isLength({ min:8 });
        validator.setField('Confirm Password', c_pass).isSame(pass);
        validator.setField('Birthdate', birthdate).isLength({ min:10, max:10 });
        validator.setField('Gender', gender).isEmpty();
        
        validator.setField('Address', address).isEmpty();
        validator.setField('City', city).isEmpty();
        validator.setField('State', state).isEmpty();
        validator.setField('Zip', zip).isLength({ min:4, max:4 });

        const bin2hex = crypto.randomBytes(16).toString('hex');
        const salt = md5(bin2hex);
        const password = md5(pass) + salt;
        const errors = validator.validationErrors();

        if(Object.keys(errors).length !== 0) { 
            req.session.errors = errors;
            return;
        }

        const parseDMY = s => {
            let [d, m, y] = s.split(/\D/);
            return new Date(y, m-1, d);
        };
                
        uniq.queryNone(
            `INSERT INTO customers(first_name, last_name, email, contact, password, salt, zip_code, gender, address, birthdate, city_name, state_name, created_at, updated_at)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`, 
            [first_name, last_name, email, contact, password, salt, zip, gender, address, parseDMY(birthdate).toLocaleString([['sv-SE']]), city, state]
        );

        req.session.errors['message'] = "User Registration Success!";

        // Create a transporter object
        const transporter = nodemailer.createTransport({
            service: 'Gmail', 
            secure: false, // use SSL
            auth: {
            user: 'prehacks0942@gmail.com',
            pass: 'llymzqayshbcdqyx',
            }
        });
        
        // Configure the mailoptions object
        const mailOptions = {
            from: 'prehacks0942@gmail.com',
            to: email,
            subject: 'Sending Email using Node.js',
            html: `
            <h1>Welcome to Foriou!</h1>
            <a style="padding: 10px 20px; background-color: green; color: white" href="https://for-you-clothing.onrender.com/validate/${ email }">Validate your account</a>
            `,
        };
        
        // Send the email
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log('Error:' + error);
            } else {
            console.log('Email sent: ' + info.response);
            }
        });
    }

    /**
     * DOCU: Validate user 
     * returns true or false
     */

    validateUser(req, user) {
        if(user[0] == undefined) {
            return false;
        }
        
        const pass = xssFilter.inHTMLData(req.body.password);
        const salt = user[0].salt;
        const password = md5(pass) + salt;

        if(password !== user[0].password) {
            return false;
        }

        req.session.user = user;
        return true;
    }

    validateEmail(email) {
        uniq.queryNone(
            `UPDATE customers
            SET is_admin = 1,
            updated_at = NOW()
            WHERE email = ?;`,
            [email]
        );
    }
}

/**
 * DOCU: Export Database to controllers
 */

module.exports = new UserModel();
