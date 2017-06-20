const express 	= require('express');
const router 	= express.Router();
const mongoose 	= require('mongoose');
const Upload	= require('../model/Upload.model.js')

// connect to db, must have mongoDB running with a db called 'test'
// note: you can add any name for the db and its auto generated once you insert a document into collection.
mongoose.connect('mongodb://localhost/test');

// will be moved to models file
// model schema
var testSchema = mongoose.Schema({
    name: String
});

// model
var Guy = mongoose.model('Guy', testSchema);


// home route
router.get('/', function(req, res, next){

    // create new guy
    var guy = new Guy({name: 'Jonathan'});
    // save new guy
    guy.save(function (err, guy) {
        if (err) return console.error(err);
        console.log(guy)
    })
    // get and return guys
    Guy.find(function (err, guys) {
        if (err) return console.error(err);
        res.render('index.html', {data: guys});
    })
});


router.post('/', function(req, res, next){
	//todo: persist url, add timestamp, and uploaded_by 

});

// make exportable to use in main app.js file
module.exports = router;
