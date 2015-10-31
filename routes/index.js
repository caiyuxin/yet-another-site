var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '嵌入式系统与大数据技术实验室 - 西安电子科技大' });
});



module.exports = router;
