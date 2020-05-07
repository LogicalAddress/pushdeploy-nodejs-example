var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var dashboardEndpoint = process.env.DASHBOARD_URL || 'http://dashboard.pushdeploy.io'
  res.render('index', { dashboardEndpoint });
});

module.exports = router;
