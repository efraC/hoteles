var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

//CONEXION A BD
/*var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spa', function(err, res) {
    if(err) throw err;
    console.log('Conectado a la base de datos...');
});
<<<<<<< HEAD
*/

var app = express();
<<<<<<< HEAD
//var models = require('./models/usuario')(app, mongoose);

=======
>>>>>>> origin/master
=======


var app = express();
>>>>>>> origin/master
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine( '.html', require('ejs').__express );
app.set('view engine', 'html');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'keyboard cat'}));
app.use(express.static(path.join(__dirname, 'public')));




var models = require('./models/usuario')(app, mongoose);
// Al principio
var login  = require('./controllers/loginController')
// Routes
app.get('/', login.login)
app.post('/entrar', login.entrar)










/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

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
