const express = require('express')
const router = express.Router()
const {getproduct,addProduct,updateProduct,deleteProduct,getOneProduct} = require('../controler/productsContoller')

router.get('/getAll', getproduct)
router.post('/add', addProduct)
router.put('/update/:id', updateProduct)
router.delete('/delete/:id', deleteProduct)
router.get('/get/:id',getOneProduct)

module.exports=router