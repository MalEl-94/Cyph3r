var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var fs = require('fs');

var index = require('./routes/index');
var register = require('./routes/register');
var rot13 = require('./routes/rot13')
var morse = require('./routes/morse');
var messenger = require('./routes/messenger');
var vigenere = require('./routes/vigenere');
var profile = require('./routes/profile');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//middleware
app.use('/', index.router);
app.use('/register', register);
app.use('/rot13', rot13);
app.use('/morse', morse);
app.use('/messenger', messenger);
app.use('/vigenere', vigenere);
app.use('/profile', profile);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
