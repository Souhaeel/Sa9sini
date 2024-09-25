const db = require("../../database/index");

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await db.Users.findAll({})
            res.status(200).send(users)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    addUsers: async (req, res) => {
        try {
            const body = req.body
            const add = await db.Users.create(body)
            res.status(201).send(add)
        }
        catch (error) {
            res.status(500).send(error)
        }

    },

    updateUsers: async (req, res) => {
        try {
            const {userName,email,password} = req.body
            const id = req.params.id
            const changeExpense = await db.Users.update({userName,email,password} , { where: { id } })
            const getone = await db.Users.findOne({ where: { id } })
            res.status(200).send(getone)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    deleteUsers: async (req, res) => {
        try {
            const id = req.params.id
            const getone = await db.Users.findOne({ where: { id } })
            const deleteExpense = await db.Users.destroy({ where: { id } })
            res.status(200).send(getone)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    getOneUsers : async(req, res) => {
          try{
            const {email}=req.query
            const getone=await db.Users.findOne({where:{email}})
            res.status(200).send(getone)
          }
            catch(error){
              res.status(500).send(error)
            }
          }
}



