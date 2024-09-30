const db = require("../../database/index");

module.exports = {
    getAnswer: async (req, res) => {
        try {
            const answer = await db.Answers.findAll({})
            res.status(200).send(answer)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    addAnswer: async (req, res) => {
        try {
            const body = req.body
            const add = await db.Answers.create(body)
            res.status(201).send(add)
        }
        catch (error) {
            res.status(500).send(error)
        }

    },

    updateAnswer: async (req, res) => {
        try {
            const { Answer } = req.body
            const id = req.params.id
            const changeExpense = await db.Answers.update({ Answer }
                , { where: { id } })
            const getone = await db.Answers.findOne({ where: { id } })
            res.status(200).send(getone)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    deleteAnswer: async (req, res) => {
        try {
            const id = req.params.id
            const getone = await db.Answers.findOne({ where: { id } })
            const deleteExpense = await db.Answers.destroy({ where: { id } })
            res.status(200).send(getone)
        }
        catch (error) {
            res.status(500).send(error)
        }
},
    getOneAnswer : async(req, res) => {
          try{
            const userId=req.query
            const getone=await db.Answers.findOne({where:{userId}})
            res.status(200).send(getone)
          }
            catch(error){
              res.status(500).send(error)
            }
          }
}



