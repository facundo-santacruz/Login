const { Router } = require('express');
// import all routers;

const usersRouter = require('./user');



var router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/users', usersRouter);           //AGREGAMOS RUTA  /users



module.exports = router;