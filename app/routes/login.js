const express 	= require('express');
const router 	= express.Router();
const mongoose 	= require('mongoose');

// import models
// import user model


// index route
router.get('/', function(req, res, next){
    // render login page
    res.render('login.html')
});

// make exportable to use in main app.js file
module.exports = router;
