module.exports = (app) => {

    const findAllQuizzes = (req, res) => {}
    const findQuizById = (req, res) => {}

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzez/:quizId', findQuizById)
}