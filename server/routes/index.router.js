const router = require('express').Router();
const loginRouter = require('./login.router');
const logoutRouter = require('./logout.router');
const registrationRouter = require('./registration.router');
const sessionRouter = require('./session.router');
const reviewsRouter = require('./reviews.router');
const categoriesRouter = require('./categories.router');
const servicesRouter = require('./services.router');
const profileRouter = require('./profile.router');
const ordersviewRouter = require('./ordersview.router');
const adminRouter = require('./admin.router');
const scheduleRouter = require('./schedule.router');
const isAuthRouter = require('./isAuth.router');
const stockpriceRouter = require('./stockprice.router');
const branchesRouter = require('./branches.router');
const initdataRouter = require('./initdata.router');
const ordersRouter = require('./orders.router');

router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/registration', registrationRouter);
router.use('/session', sessionRouter);
router.use('/reviews', reviewsRouter);
router.use('/categories', categoriesRouter);
router.use('/services', servicesRouter);
router.use('/profile', profileRouter);
router.use('/ordersview', ordersviewRouter);
router.use('/admin', adminRouter);
router.use('/schedule', scheduleRouter);
router.use('/isAuth', isAuthRouter);
router.use('/stockprice', stockpriceRouter);
router.use('/branches', branchesRouter);
router.use('/initdata', initdataRouter);
router.use('/orders', ordersRouter);


module.exports = router;
