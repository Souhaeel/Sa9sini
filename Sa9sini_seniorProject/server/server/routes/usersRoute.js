const express = require('express')
const router = express.Router()
const {getUsers,addUsers,updateUsers,deleteUsers,getOneUsers,updateImage} = require('../controler/usersContoller')

router.get('/getAll', getUsers)
router.post('/add', addUsers)
router.put('/update/:id', updateUsers)
router.delete('/delete/:id', deleteUsers)
router.get('/get/:id',getOneUsers)
router.put('/updateImage/:id',updateImage)


module.exports=router