const express 	= require('express');
const router 	= express.Router();
const mongoose 	= require('mongoose');

// import models
const Upload	= require('../models/Upload.model')


// index route
router.get('/', function(req, res, next){
    // get uploads and pass to view
    Upload.find(function (err, uploads) {
        if (err) return console.error(err);
        res.render('index.html', {uploads: uploads});
    })
});

router.post('/', function(req, res, next){
	//todo: persist url, add timestamp, and uploaded_by 

    // example creation code
    // var upload = new Upload({
    //     title: 'Test Article',
    //     description: 'Description for test article',
    //     content: 'This is the content of the article',
    //     tags: 'javascript,frontend',
    //     type: 'article',
    //     url: 'http://localhost:3000',
    //     uploadBy: 'Jonathan',
    //     uploadDate: '21-06-2017 16:43:21',
    //     originalAuthor: 'Joe Blogs',
    //     originalCreationDate: '18-06-2017 16:43:21',
    // });
    // // save new upload
    // upload.save(function (err, upload) {
    //     if (err) return console.error(err);
    //     console.log('upload successfully saved')
    //     // return something if you want
    //     // return guy
    // })

});

// make exportable to use in main app.js file
module.exports = router;
