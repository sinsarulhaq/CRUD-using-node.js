var express = require('express');
var router = express.Router();
var staffHelper = require('../helper/staff-helper')

/* GET home page. */
router.get('/', function(req, res, next) {
  staffHelper.getStaff().then((staffs)=>{
    // console.log(staffs)
    res.render('view-staff',{staffs});
  })
  
});
router.get('/add-staff',(req,res)=>{
  res.render('add-staff')
})
router.post('/add-staff',(req,res)=>{
  // console.log(req.body)
  staffHelper.addStaff(req.body).then((products)=>{
    // console.log(products)
    res.render('add-staff')
  })
  
})
router.get('/edit-staff/:id',(req,res)=>{
  let proId = req.params.id
    staffHelper.getDetailsStaff(proId).then((get)=>{
    console.log(get)
    res.render('edit-staff',{get})
  })
  
})
router.get('/delete-staff/:id',(req,res)=>{
  let proId = req.params.id
  staffHelper.deleteStaff(proId).then((data)=>{
    console.log(data)
    res.redirect('/')
  })
})


module.exports = router;
