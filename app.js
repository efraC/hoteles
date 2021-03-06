var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

//CONEXION A BD
var mongoose = require('mongoose');
//NOS CONECTAMOS A LA BD Y LE DECIMOS QUE SOLO USE 1 CONEXION
mongoose.connect('mongodb://localhost/spa', { server: { poolSize: 1 } },function(err, res) {
    if(err) throw err;
    console.log('Conectado a la base de datos...');
});


var app = express();
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

var user_model = require('./models/usuario')(app, mongoose);
var cliente_model = require('./models/cliente')(app,mongoose);
var empleado_model = require('./models/empleado')(app,mongoose);
var cabina_model = require('./models/cabina')(app,mongoose);
var servicio_model = require('./models/servicio')(app,mongoose);

// Al principio
var login  = require('./controllers/loginController')
var menu  = require('./controllers/menuController')
var cliente = require('./controllers/clienteController')
var empleado = require('./controllers/empleadoController')
var cabina = require('./controllers/cabinaController')
var servicio = require('./controllers/servicioController')

// Routes
app.get('/', login.login)
app.post('/entrar', login.entrar)
app.post('/salir',login.salir)

app.get('/menu',menu.menu)

app.get('/cliente',cliente.view)
app.get('/cliente/buscar',cliente.buscar)
app.post('/cliente/guardar',cliente.guardar)

app.get('/empleado',empleado.view)
app.get('/empleado/buscar',empleado.buscar)
app.post('/empleado/guardar',empleado.guardar)

app.get('/cabina',cabina.view)
app.get('/cabina/buscar',cabina.buscar)
app.post('/cabina/guardar',cabina.guardar)

app.get('/servicio',servicio.view)
app.get('/servicio/buscar',servicio.buscar)
app.post('/servicio/guardar',servicio.guardar)


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Lo que buscas no esta :c');
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
            error: err.status
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
