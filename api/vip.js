const router = require('nordic/ragnar').router();
console.log('router', router);

/**
 * /demo/user endpoint
 */
router.get('/jose-api/:id', (req, res) => {
  console.log(req.params.id);
});

module.exports = router;