import Modal from './modal.js'

const modal = Modal()
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('.actions a.check')



checkButtons.forEach(button =>{
  button.addEventListener('click' , handleClick)
})

const deleteButtons = document.querySelectorAll('.actions a.delete') 


deleteButtons.forEach(button =>{
  button.addEventListener('click' , event => handleClick(event , false))
})

function handleClick(event , check = true){
  event.preventDefault()

  const form  = document.querySelector('.modal form')

  const roomId = document.querySelector('#room-id').dataset.id
  const slug = check ? 'check' : 'delete '
  const questionId = event.target.dataset.id
  
  form.setAttribute('action' , `/question/${roomId}/${questionId}/${slug}`) 



  const text = check ? 'Marca como lida ' : 'Excluir '


  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta` 
  modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`

  check ? modalButton.classList.remove('red') :  modalButton.classList.add('red')
  //abrir modal
  modal.open()


  
  
}