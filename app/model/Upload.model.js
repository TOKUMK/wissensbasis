var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var UploadSchema = new Schema({
    url:  			String,
    uploadBy: 		String,
    uploadDate: 	String, 
})

module.exports = mongoose.model('Upload', UploadSchema);
