var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('view-staff');
});
router.get('/add-staff',(req,res)=>{
  res.render('add-staff')
})
router.get('/edit-staff',(req,res)=>{
  res.render('edit-staff')
})

module.exports = router;
