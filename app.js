/**
 * Author: Arjhay Frias
 * Created_at: 03/31/2022
 * Updated_at: 04/09/2022
 * 
 * Description: App.js Manages the server's configuration
 * And loads specific Packages / Modules
 * 
 */

/**
 * DOCU: Loads the Express Module in order for us
 * to set the app.
 */

const express = require('express');

/**
 * DOCU: Loads the Express Session Module in order for us
 * to set session data.
 */

const session = require('express-session');

/**
 * DOCU: Loads The body parser module which manages the post
 * and get data from the user.
 */

const bodyParser = require('body-parser');

/**
 * DOCU: Loads File System for file navigation.
 */

const fs = require('fs');

/**
 * DOCU: Loads Yaml module to access yaml files
 */

const yaml = require('js-yaml');

/**
 * DOCU: This loads the express ejs layouts.
 */

const expressLayouts = require('express-ejs-layouts');
/**
 * DOCU: Loads the Routes Module which handles all 
 * the users request it also handles the necessary controllers
 * for routing from view page to another.
 */

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

 /**
 * DOCU: Load middleware module 
 * Can be used to do global xss filtering and enable the profiler
 */

const middleware = require('./static/lib/middleware/middleware');

/**
 * DOCU: Load yaml file data to variable config
 */

const raw = fs.readFileSync('config.yaml');
const config = yaml.load(raw);

const AXIOS = require('axios');


/**
 * DOCU: Checks if Redis Server is Enabled in Config
 */

const isRedisServerEnabled = config.redis_server.enable;
let myRedis = { store: undefined };

/**
 * DOCU: Loads and Stablish a redis connection.
 */

if(isRedisServerEnabled) {
    const redis = require('redis');
    const redisClient = redis.createClient({ legacyMode: true });
    const redisStore = require('connect-redis')(session);

    myRedis = { store: new redisStore({ host: config.redis_server.host, port: config.redis_server.port, client: redisClient, ttl: config.redis_server.tll })};
    
    redisClient.on('error', (err) => {
        console.log('Redis Server is not Running!');
    });
        
    redisClient.connect();
}

/**
 * DOCU: Creates an Express application and name it app. 
 * The express function is a top-level function exported by 
 * the express module.
 */

const app = express();

/**
 * DOCU: Using app to set view engine as ejs.
 * EJS is a node module with a PHP like syntax
 * and as the ability to write down data on the DOM.
 */

app.set('view engine', 'ejs');

/**
 * DOCU: Using app to set view engine as express ejs layouts.
 */

app.set(expressLayouts);

/**
 * DOCU: Define our static folder which contains
 * our image assets, javascript files, and stylesheets
 * NOTE: __dirname is our Current Directory name/path 
 * Which is "MAKING EXPRESS MVC" folder.
 */

app.use(express.static(__dirname + "/static/"));

/**
 * DOCU: Converts valid content type into a json readable format
 * extended: true precises that the req.body object will contain values 
 * of any type instead of just strings.
 */

app.use(bodyParser.urlencoded({ extended: true }));


// /**
//  * DOCU: Initialize our session data.
//  */

app.use(session({
    secret: config.session_data.secret,
    name: config.session_data.name,
    resave: config.session_data.resave,
    saveUninitialized: false,
    cookie: { 
        maxAge: 1000 * 60 * 60 * 24, 
        secure: config.session_data.cookie.secure 
    },
    store: myRedis.store
}));

/**
 * DOCU: Load the routes module in app.
 */

app.use(userRoutes);
app.use(productRoutes);

/**
 * DOCU: Use Middleware Logger that logs data to screen
 * Also called as Enabled Profiler
 */

app.use(middleware.logger);

/**
 * DOCU: The app listen for any changes in port number and update for 
 * any changes.
 */

app.listen(config.port, () => {
    console.log(`http://localhost:${ config.port }/`);
});


setInterval(function() {
    AXIOS.get('https://for-you-clothing.onrender.com');
    console.log('ping: status ok!');
}, 10 * 60 * 1000); // Ping every 10 minutes
