var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('You have tried to come to Users Route as empty / character.');
});

module.exports = router;
