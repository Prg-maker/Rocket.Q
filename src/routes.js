const e = require('express');
const express = require('express');
const router = express.Router();
const questionController = require('./controllers/questionController')
const roomController = require('./controllers/roomController')

router.get('/', (request , response)=>{
  response.render('Home' , {page: 'enter-room'})
})

router.get('/create-pass', (request , response )=>{
  response.render('Home', {page: 'Create-pass'})
})

router.get('/room/:id', roomController.open)
router.post('/create-room' , roomController.create)
router.post('/enterroom' , roomController.enter)

router.post('/question/create/:room' , questionController.create)
router.post('/question/:id/:question/:action' , questionController.index )

module.exports = router