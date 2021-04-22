const quizAttemptDao = require('../daos/quiz-attempts-dao')

module.exports = (app) => {
    app.post('/api/quizzes/:qid/attempts', (req, res) =>
        quizAttemptDao.createAttempt( req.params.quizId, req.body)
            .then(attempt => res.send(attempt)))
    app.get('/api/quizzes/:qid/attempts', (req, res) =>
        quizAttemptDao.findAttemptsForQuiz(req.params.quizId)
            .then(attempts => res.send(attempts)))
}
