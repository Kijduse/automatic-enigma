var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kevin J Park Limited' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Kevin J Park Limited :: About' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Kevin J Park Limited :: Services' });
});

router.get('/site', function(req, res, next) {
  res.render('site', { title: 'Kevin J Park Limited :: This Site' });
});

module.exports = router;
