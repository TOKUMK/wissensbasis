var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UploadSchema = new Schema({
    title:                  String,
    description:            String,
    content:                String,
    tags:                   String,
    type:                   String,
    url:  			        String,
    uploadBy: 		        String,
    uploadDate: 	        String,
    originalAuthor:         String,
    originalCreationDate:   String,
})

module.exports = mongoose.model('Upload', UploadSchema);
