const express = require('express')
const router = express.Router()
const {getQuestion,addQuestion,updateQuestion,deleteQuestion,getOneQuestion}= require('../controler/QuestionsContoller')

router.get('/getAll', getQuestion)
router.post('/add', addQuestion)
router.put('/update/:id', updateQuestion)
router.delete('/delete/:id', deleteQuestion)
router.get('/get/:id',getOneQuestion)

module.exports=router