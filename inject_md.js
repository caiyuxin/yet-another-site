var mongoose = require('mongoose');
var model = require('./model');
var fs = require('fs');

function inject(m, title_, summary_, file_name) {
  var text = fs.readFileSync(file_name, {encoding: 'utf-8'});
  var news = new m({
    title: title_,
    doc: text,
    summary: summary_
  });
  news.save(function (err, doc) {
    if (err) {
      return console.error(err);
    } else {
      console.log(file_name, "done.")
    }
  });
}

mongoose.connect('mongodb://localhost/bes');
inject(model.News, "西电BES实验室张亮博士主持召开CCCV2015专题论坛", "015年9月18日至20日，第一届中国计算机视觉大会（CCCV 2015）在西安召开。西安电子科技大学大数据技术和嵌入式系统（BES）实验室张亮博士主持19日大会专题论坛", "public/n-cccv.markdown");
//inject(model.Achievement, "著作", "BESLab部分已出版著作", "public/a-books.markdown");
inject(model.Achievement, "嵌入式设备", "", "public/a-emb.markdown");


