const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(cors())
















app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});