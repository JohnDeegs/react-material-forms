//strict mode
'use strict'

//import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//create instances
const app = express();
const router = express.Router();

//setup port to predetermined number or 3001
const port = process.env.API_Port || 3001;

//configure api to look for body parser and look for json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Allow CORS with middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods',
    'GET, HEAD, OPTIONS, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

//remove cacheing for most recent posts
res.setHeader('Cache-Control', 'no-cache');
next();

});

//Initialize API
router.get('/', (req, res) =>{
    res.json({message: 'API Initialized'});
});

//Call router config
app.use('/api', router);

app.listen(port, () => {
    console.log(`api running on port ${port}`);
});

