const express = require('express');
const router = express.Router();


router.get('/', (request , response)=>{
  response.render("Home")
})

router.get('/create-pass', (request , response )=>{
  response.render('Create-pass')
})

router.get('/room', (request , response )=>{
  response.render('Room')
})

module.exports = router