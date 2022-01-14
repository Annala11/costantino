const router = require('express').Router();
const loginRouter = require('./login.router');
const logoutRouter = require('./logout.router');
const registrationRouter = require('./registration.route');
const sessionRouter = require('./session.route');
const reviewsRouter = require('./reviews.router');
const categoriesRouter = require('./categories.router');
const servicesRouter = require('./services.router');
const profileRouter = require('./profile.route');
const adminRouter = require('./admin.route');
const scheduleRouter = require('./schedule.route');
const isAuthRouter = require('./isAuth.route');
const stockpriceRouter = require('./stockprice.route');


router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/logregistrationout', registrationRouter);
router.use('/session', sessionRouter);
router.use('/reviews', reviewsRouter);
router.use('/categories', categoriesRouter);
router.use('/services', servicesRouter);
router.use('/profile', profileRouter);
router.use('/admin', adminRouter);
router.use('/schedule', scheduleRouter);
router.use('/isAuth', isAuthRouter);
router.use('/stockprice', stockpriceRouter);

module.exports = router;
