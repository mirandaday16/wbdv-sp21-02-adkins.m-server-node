const express = require('express')
const app = express()

const quizzesController = require('./controllers/quizzes-controller')
quizzes(app)

app.listen(4000)