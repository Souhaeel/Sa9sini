const mysql = require("mysql2");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig)


connection.connect((err)=>{
 err ? console.error(err) : console.log("Database connected");
})



module.exports = connection
