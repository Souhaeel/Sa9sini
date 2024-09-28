const express = require('express')
const router = express.Router()
const {getAnswer,addAnswer,updateAnswer,deleteAnswer,getOneAnswer}= require('../controler/AnswersContoller')

router.get('/getAll', getAnswer)
router.post('/add', addAnswer)
router.put('/update/:id', updateAnswer)
router.delete('/delete/:id', deleteAnswer)
router.get('/get/:id',getOneAnswer)

module.exports=router