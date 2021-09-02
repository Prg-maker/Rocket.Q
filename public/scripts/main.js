import Modal from './modal.js'

const modal = Modal()

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button =>{
  button.addEventListener('click' , event =>{
    modal.open()
  })
})

const deleteButtons = document.querySelectorAll('.actions a.delete') 


deleteButtons.forEach(button =>{
  button.addEventListener('click' , event =>{
    modal.open()
  })
})
