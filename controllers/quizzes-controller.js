// module.exports = (app) => {
//     const quizzesService = require('../services/quizzes/quiz-service')
//
//     const findAllQuizzes = (req, res) => {
//         const quizzes = quizzesService.findAllQuizzes()
//         res.send(quizzes)
//     }
//     const findQuizById = (req, res) => {
//         const qid = req.params['quizId']
//         const quiz = quizzesService.findQuizById(qid)
//         res.send(quiz)
//     }
//
//     app.get('/api/quizzes', findAllQuizzes)
//     app.get('/api/quizzez/:quizId', findQuizById)
// }

const quizzesService = require('../services/quizzes/quiz-service')
module.exports = function (app) {
    app.get('/api/quizzes', (req, res) =>
        quizzesService.findAllQuizzes()
            .then(allQuizzes => res.json(allQuizzes)))
    app.get('/api/quizzes/:qzid', (req, res) =>
        quizzesService.findQuizById(req.params['qzid'])
            .then(quiz => res.json(quiz)))
}
