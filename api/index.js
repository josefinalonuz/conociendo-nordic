/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const demo = require('./demo');
const vip = require('./vip');
//const vip = require('./vip');
const middlewareJose  = require('./middlewares/jose-middleware');

/**
 * Demo router
 */
router.use('/demo', middlewareJose, demo);
router.use(vip);
/**
 * Expose API router
 */
module.exports = router;
