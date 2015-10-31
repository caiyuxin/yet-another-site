var marked = require('marked');
var jade = require('jade');
var Type = require('./doctype.js');

function render(doc_type, doc) {
  if (doc_type === Type.markdown) {
    return marked(doc);
  } else if (doc_type === Type.html) {
    return doc;
  } else if (doc_type === Type.jade) {
    return jade.compile(doc)();
  } else {
    throw TypeError("Unknown doc_type: + \"" + doc_type + "\"")
  }
}

module.exports = render;