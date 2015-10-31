var express = require('express');
var mongoose = require('mongoose');
var model = require('../model.js');
var doc_render = require('../doc.js');

var router = express.Router();

var nav_items = [["实验室概况", "about"],
                 ["科研成果",   "achievement"],
                 ["合作交流",   "cooperate"],
                 ["人才培养",   "team"],
                 ["新闻动态",   "news"],
                 ["联系我们",   "contact"]];

mongoose.connect('mongodb://localhost/bes');

router.get('/', function(req, res, next) {
  res.redirect('/about');
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    title: '实验室概况',
    nav_items: nav_items,
    nav_active: '实验室概况'
  });
});

router.get('/cooperate', function(req, res, next) {
  res.render('cooperate', {
    title: '合作交流',
    nav_items: nav_items,
    nav_active: '合作交流'
  });
});

router.get('/team', function(req, res, next) {
  res.render('team', {
    title: '人才培养',
    nav_items: nav_items,
    nav_active: '人才培养',
    members: [ {
      name: "陈欢",
      img:  "images/h.jpg",
      details: "展讯通信(上海)"
    }]
  });
});

router.get('/news', function(req, res, next) {
  model.News.find(function (err, news_iter) {
    console.log(news_iter);
    news_iter.forEach(function (news) {
      news.rendered = doc_render(news.doc_type, news.doc);
    });
    res.render('news', {
      title: '新闻动态',
      nav_items: nav_items,
      nav_active: '新闻动态',
      news_iter: news_iter
    });
  });
});

router.get('/achievement', function(req, res, next) {
  model.Achievement.find(function (err, acs) {
    console.log(acs);
    acs.forEach(function (ac) {
      ac.rendered = doc_render(ac.doc_type, ac.doc);
    });
    res.render('achievement', {
      title: '首页',
      nav_items: nav_items,
      nav_active: '',
      acs: acs
    });
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: '联系我们',
    nav_items: nav_items,
    nav_active: '联系我们'
  });
});

module.exports = router;
