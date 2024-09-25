const db = require("../../database/index");
module.exports = {
    getTransaction: async (req, res) => {
        try {
            const expenses = await db.Transactions.findAll({})
            res.status(200).send(expenses)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    addTransaction: async (req, res) => {
        try {
            const body = req.body
            const add = await db.Transactions.create(body)
            res.status(201).send(add)
        }
        catch (error) {
            res.status(500).send(error)
        }

    },

    updateTransaction: async (req, res) => {
        try {
            const {buyer,seller,product} = req.body
            const id = req.params.id
            const changeExpense = await db.Transactions.update({buyer,seller,product} , { where: { id } })
            const getone = await db.Transactions.findOne({ where: { id } })
            res.status(200).send(getone)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    deleteTransaction: async (req, res) => {
        try {
            const id = req.params.id
            const getone = await db.Transactions.findOne({ where: { id } })
            const deleteExpense = await db.Transactions.destroy({ where: { id } })
            res.status(200).send(getone)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    getOneTransaction : async(req, res) => {
          try{
            const id=req.params.id
            const getone=await db.Transactions.findOne({where:{id}})
            res.status(200).send(getone)
          }
            catch(error){
              res.status(500).send(error)
            }
          }
}



