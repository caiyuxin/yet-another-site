var Types = require('../doctype.js');
var fs = require('fs');
var path = require('path');
var express = require('express');
var doc_render = require('../doc.js');


module.exports = function (root) {
  var router = express.Router();
  router.get('/', function(req, res, next) {
    fs.readFile(path.join(root, 'README.md'), { encoding: 'utf-8' }, function(err, data) {
      res.render('dev', {
        title: '开发日志',
        dev: doc_render(Types.markdown, data)
      });
    });
  });
  return router;
};
