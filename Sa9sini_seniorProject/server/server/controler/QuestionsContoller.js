const db = require("../../database/index");
module.exports = {
    getQuestion: async (req, res) => {
        try {
            const Question = await db.Questions.findAll({})
            res.status(200).send(Question)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    addQuestion: async (req, res) => {
        try {
            const body = req.body
            const add = await db.Questions.create(body)
            res.status(201).send(add)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },

    updateQuestion: async (req, res) => {
        try {
            const {Question,category} = req.body
            const id = req.params.id
            const changeExpense = await db.Questions.update({Question,category} , { where: { id } })
            const getone = await db.Questions.findOne({ where: { id } })
            res.status(200).send(getone)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    deleteQuestion: async (req, res) => {
        try {
            const id = req.params.id
            const getone = await db.Questions.findOne({ where: { id } })
            const deleteExpense = await db.Questions.destroy({ where: { id } })
            res.status(200).send(getone)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    getOneQuestion : async(req, res) => {
          try{
            const id=req.params.id
            const getone=await db.Questions.findOne({where:{id}})
            res.status(200).send(getone)
          }
            catch(error){
              res.status(500).send(error)
            }
          }
}



