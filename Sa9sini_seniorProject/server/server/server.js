const express = require("express");
const cors = require('cors')
const db = require("../database/index");
const app = express();
const PORT = 3000;
const routeProducts = require('./routes/productsRoute')
const routeTransactions = require('./routes/transactionsRoute')
const routeUsers = require('./routes/usersRoute')





app.use(express.json())
app.use(cors())
app.use('/api/products',routeProducts);
app.use('/api/transaction',routeTransactions);
app.use('/api/users',routeUsers);







app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});