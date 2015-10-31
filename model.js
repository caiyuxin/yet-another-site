var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OID = Schema.Types.ObjectId;

var BaseDocument = new Schema ({
  title: String,
  author: {type: String, default: "BESLab"},
  cover_img: {type: String, default: "images/placeholder.png"},
  doc_type: {type: String, default: "Markdown"},
  doc: String,
  summary: String,
  timestamp: {type: Date, default: Date.now},
});

var model = {
  Achievement: mongoose.model('Achievement', BaseDocument),
  News: mongoose.model('News', BaseDocument)
};

module.exports = model;