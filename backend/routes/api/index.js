const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const imagesRouter = require('./images');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/images', imagesRouter);

module.exports = router;
