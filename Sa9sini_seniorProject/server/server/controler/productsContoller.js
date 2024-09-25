const db = require("../../database/index");


module.exports = {
    getproduct: async (req, res) => {
        try {
            const expenses = await db.Products.findAll({})
            res.status(200).send(expenses)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    addProduct: async (req, res) => {
        try {
            const body = req.body
            const add = await db.Products.create(body)
            res.status(201).send(add)
        }
        catch (error) {
            res.status(500).send(error)
        }

    },

    updateProduct: async (req, res) => {
        try {
            const { productsName, images, category, price, description } = req.body
            const id = req.params.id
            const changeExpense = await db.Products.update({ productsName, images, category, price, description }
                , { where: { id } })
            const getone = await db.Products.findOne({ where: { id } })
            res.status(200).send(getone)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const id = req.params.id
            const getone = await db.Products.findOne({ where: { id } })
            const deleteExpense = await db.Products.destroy({ where: { id } })
            res.status(200).send(getone)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    getOneProduct : async(req, res) => {
          try{
            const userId=req.query
            const getone=await db.Products.findOne({where:{userId}})
            res.status(200).send(getone)
          }
            catch(error){
              res.status(500).send(error)
            }
          }
}



