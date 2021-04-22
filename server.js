const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/whiteboard',
    {useNewUrlParser: true,
        useUnifiedTopology: true});

var bodyParser = require('body-parser')


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const quizzesController = require('./controllers/quizzes-controller')
const questionsController = require('./controllers/question-controller')
const attemptsController = require('./controllers/quiz-attempts-controller')

quizzesController(app)
questionsController(app)
attemptsController(app)

require('dotenv').config();
app.listen(process.env.PORT || 3000);