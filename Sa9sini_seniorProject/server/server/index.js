const express = require("express");
const cors = require('cors')
const db = require("../database/index");
const app = express();
const PORT = 3000;
const routeAnswers = require('./routes/AnswersRoute')
const routeQuestions = require('./routes/QuestionsRoute')
const routeUsers = require('./routes/usersRoute')





app.use(express.json())
app.use(cors())
app.use('/api/Answers',routeAnswers);
app.use('/api/Questions',routeQuestions);
app.use('/api/users',routeUsers);







app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});