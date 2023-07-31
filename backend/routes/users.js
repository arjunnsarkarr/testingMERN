var mongoose = require("mongoose")
mongoose.set('strictQuery',true)

mongoose.connect("mongodb://127.0.0.1:27017/testingDB" )


var userSchema = mongoose.Schema({
  username: String,
  email : String
})

module.exports = mongoose.model('user',userSchema)














// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
