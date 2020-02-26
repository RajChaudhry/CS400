var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/part1', function(req, res, next) {
  res.render('part1', { string: 'Testing' });
});

router.post('/part2', (req, res, next) => {
  const foo = JSON.parse(JSON.stringify(req.body))
  res.send({ original: foo, length: foo.original.length});
})

module.exports = router;
