var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


// router.post('/register', function (req,res,next){
//   var data = new userModel({
//     username : req.body.username,
//     email : req.body.email
//   })
//   res.send(data);
// })


router.post("/register", async (req, resp) => {
  try {
    const user = new userModel(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {  
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("User already register");
    }
  } 
  catch (e) {
    resp.send("Something Went Wrong " , e);
  }
});

module.exports = router;


