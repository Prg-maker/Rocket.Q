const Database = require('../db/config') 

module.exports ={

  

  async index(request , response){
    const db = await Database() 
    const roomId = request.params.id
    const questionId = request.params.question
    const action = request.params.action
    const password = request.body.password

    const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)

    console.log(verifyRoom)

    if(verifyRoom.pass == password){
      if(action == "delete"){
        

        await db.run(`DELETE FROM questions WHERE id = ${questionId}`)

      }else if(action == "check"){
        console.log('chegou aqui')

        await db.run(`UPDATE questions   SET read = 1 WHERE id = ${questionId}`)
      }
      response.redirect(`/room/${roomId}`)

    }else{
      console.log('senha incorreta')
    }
    response.redirect(`/room/${roomId}`)

  },
  async create(request , response){

    const db = await  Database()

    const question = request.body.question
    const roomId = request.params.room

    db.run(`INSERT INTO questions(
      title,
      read,
      room
    )VALUES(
      "${question}",
      0,
      ${roomId}
    )`)

    response.redirect(`/room/${roomId}`)

  }
}