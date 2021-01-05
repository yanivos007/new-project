const apiRouter = require('express').Router();


apiRouter.use('/users', require('../routers/usersRouter'));
apiRouter.use('/vacations', require('../routers/vacationRouter'));
// apiRouter.use('/users', require('./routers/usersRouter'));



module.exports = apiRouter;