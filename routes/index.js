var express = require('express');
var router = express.Router();
var staffHelper = require('../helper/staff-helper')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('view-staff');
});
router.get('/add-staff',(req,res)=>{
  res.render('add-staff')
})
router.post('/add-staff',(req,res)=>{
  // console.log(req.body)
  staffHelper.addStaff(req.body).then((products)=>{
    console.log(products)
    res.render('add-staff')
  })
  
})
router.get('/edit-staff',(req,res)=>{
  res.render('edit-staff')
})

module.exports = router;
