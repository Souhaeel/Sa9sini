const express = require('express')
const router = express.Router()
const {getTransaction,addTransaction,updateTransaction,deleteTransaction,getOneTransaction} = require('../controler/transactionContoller')


router.get('/getAll', getTransaction)
router.post('/add', addTransaction)
router.put('/update/:id', updateTransaction)
router.delete('/delete/:id', deleteTransaction)
router.get('/get/:id',getOneTransaction)

module.exports=router