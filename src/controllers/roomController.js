const Database = require('../db/config')

module.exports = {

  async create(request , response){
    const pass = request.body.password
    let roomId = ''
    let isRoom = true
    const db = await  Database()

    while(isRoom){
      
      for(var i = 0 ;  i < 6 ; i++){
        roomId += Math.floor(Math.random() * 10).toString()
        
      }
      const roomsExistId = await  db.all("SELECT id FROM rooms")

      isRoom = roomsExistId.some( id => id === roomId)
  
      if(!isRoom){
        await db.run(`INSERT INTO rooms(
          id,
          pass
        )VALUES(
          ${parseInt(roomId)},
          ${pass}
        )`)
      }

    }       
    /*insert the room in db*/
    
    db.close()

    response.redirect(`/room/${roomId}`)
  },


  async open(request , response){
    const db =  await Database()

    const roomId = request.params.id
    const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
    const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
    let  isNoQuestions  

    if(questions.length == 0 ){
      if(questionsRead){
        console.log('chegou aqui')
        isNoQuestions = true
      }
      
    } 

    response.render('Room' , {roomId : roomId , questions: questions , questionsRead: questionsRead , isNoQuestions: isNoQuestions} )

  },

  enter(request , response ){
    const roomId = request.body.roomId

    response.redirect(`/room/${roomId}`)
  }
}

