const questionsModel = require('../models/questions/questions-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.find({_id: qid})
const findQuestionsForQuiz = (qzid) => questionsModel.find({quizId: qzid})
    .populate('questions').exec().then(questions => questions)

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}