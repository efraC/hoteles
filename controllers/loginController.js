var mongoose = require('mongoose');
var usuarios  = mongoose.model('usuarios');

//RENDER THE VIEW LOGIN
exports.login = function (req, res, next)
{
  res.render('login')
}

//GET - Return all tvshows in the DB
exports.entrar = function(req, res) 
{
	//obtenemos el usuario que trata de entrar al sistema
 	var usuario_req = req.params.usuario;
 	var contrasena_req = req.params.contrasena;
    usuarios.findOne({'usuario':'root'},function(err, usuario)
    {
		if(err)
		{
			res.send(500, err.message);
		}
		if(usuario_req.usuario == usuario.usuario && contrasena_req.contrasena == usuario.contrasena)
		{
			res.status(200).jsonp(usuario);
		}else
		{
	 		res.json({ error : true })
	 	}
    });
};

