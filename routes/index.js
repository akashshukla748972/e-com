// in this file i am getting all the requests 
const router = require('express').Router();
// product request
router.use('/products', require('./product'));

module.exports = router;