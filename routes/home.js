var express = require('express');
var mongoose = require('mongoose');
var model = require('../model.js');
var router = express.Router();

var nav_items = [["科研成果", "/achievement"],
                 ["合作交流", "/cooperate"],
                 ["人才培养", "/team"],
                 ["新闻动态", "/news"],
                 ["关于BES", "/about"],
                 ["联系我们", "/contact"]];

mongoose.connect('mongodb://localhost/bes');

nav_items.forEach(function(item) {
  router.get(item[1], function(req, res, next) {
    res.render('home', { title: item[0], nav_items: nav_items, nav_active: item[0] });
  });
});

router.get('/', function(req, res, next) {
  res.render('home', { title: '首页', nav_items: nav_items, nav_active: '' });
});

module.exports = router;
