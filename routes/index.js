var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
/* GET Hello World page. */
router.get('/helloWorld', function(req, res) {
  res.render('helloWorld', { title: 'Hello, World!' });
});
module.exports = router;
