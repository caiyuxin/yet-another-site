var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var home = require('./routes/home');
var dev = require('./routes/dev');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


// Static path
var bower_static = function (subdir) {
  return express.static(path.join(__dirname, 'bower_components', subdir))
};

app.use('/_fw/jquery',        bower_static('jquery/dist'));
app.use('/_fw/jquery-easing', bower_static('jquery-easing'));
app.use('/_fw/semantic',      bower_static('semantic/dist'));
app.use('/_fw/font-awesome',  bower_static('font-awesome'));
app.use('/_fw/angular',       bower_static('angular'));
app.use('/_fw/bootstrap',     bower_static('bootstrap/dist'));
app.use('/_fw/underscore',    bower_static('underscore'));

app.use('/i', routes);
app.use('/dev', dev(__dirname));
app.use('/',  home);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
