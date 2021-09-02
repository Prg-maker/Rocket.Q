export default  function Modal (){

  
  const modalWrapper =  document.querySelector('.modal-wrapper')
  const cancel = document.querySelector('#button-cancel')
 
  cancel.addEventListener('click', closed)

  function open(){
    // function add active in modal 

    modalWrapper.classList.add('active')
  }
  function closed(){
    // function remove active in modal
   
    modalWrapper.classList.remove('active')
  }



  return {open, closed}
}
