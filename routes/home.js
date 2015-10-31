var express = require('express');
var mongoose = require('mongoose');
var model = require('../model.js');
var doc_render = require('../doc.js');
var Tags = require('../tags.js');
var _ = require('underscore');

var router = express.Router();

var nav_items = [["首页",      "/"],
                 ["实验室概况", "/about"],
                 ["科研成果",   "/achievement"],
                 ["人才培养",   "/team"],
                 ["新闻动态",   "/news"],
                 ["合作交流",   "/cooperate"],
                 ["联系我们",   "/contact"]];

mongoose.connect('mongodb://localhost/bes');

router.get('/', function(req, res, next) {
  res.redirect('/about');
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    title: '实验室概况'
  });
});

router.get('/achievement', function(req, res, next) {
  model.Achievement.find(function (err, acs) {
    console.log(acs);
    acs.forEach(function (ac) {
      ac.rendered = doc_render(ac.doc_type, ac.doc);
    });
    res.render('docs', {
      title: '科研成果',
      docs: acs,
      show_search: true,
      categories: _.values(Tags.Achievement)
    });
  });
});

router.get('/team', function(req, res, next) {
  res.render('team', {
    title: '人才培养',
    members: [ {
      name: "陈欢",
      img:  "images/h.jpg",
      details: "展讯通信(上海)"
    }],
    show_search: true,
    categories: _.values(Tags.Person)
  });
});


router.get('/news', function(req, res, next) {
  model.News.find(function (err, news_iter) {
    console.log(news_iter);
    news_iter.forEach(function (news) {
      news.rendered = doc_render(news.doc_type, news.doc);
    });
    res.render('docs', {
      title: '新闻动态',
      docs: news_iter,
      show_search: true,
      categories: _.values(Tags.News)
    });
  });
});

router.get('/cooperate', function(req, res, next) {
  res.render('cooperate', {
    title: '合作交流'
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: '联系我们'
  });
});

router.get('/dev', function(req, res, next) {
  res.render('dev', {
    title: '开发日志'
  });
});

module.exports = router;
