var mongoose = require('mongoose');
var usuarios  = mongoose.model('usuarios');

//RENDER THE VIEW LOGIN
exports.login = function (req, res, next)
{
	if(req.session.usuario)
	{
		res.redirect('/menu');
		console.log('algo2')
   		//res.json({ redirect : '/menu' });
 	}else
 	{
 		res.render('login');
 	}

}

//VALIDA SI ES POSIBLE ENTRAR A LA APLICACION
exports.entrar = function(req,res,next) 
{
	//obtenemos el usuario que trata de entrar al sistema
 	var usuario_req = req.body.usuario;
 	var contrasena_req = req.body.contrasena;

  	usuarios.findOne({'usuario': usuario_req },function(err, usuario)
    {
		if(err) //ERROR DE CONEXION O ALGO ASI..
		{
			res.send(500, err.message);
		}
		if(usuario && usuario_req == usuario.usuario && contrasena_req == usuario.contrasena)
		{
			req.session.nombreUsuario = usuario_req;
			req.session.usuario = true;
			res.json({ redirect : '/menu', error: false });
		}
		else
		{
			res.json({ error : true });
		}
    });
};

//SALIR DE LA APLICACION
exports.salir = function(req,res,next) 
{
	req.session.destroy();
	res.json({ redirect : '/' });
};