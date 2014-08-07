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
	var reqUSUARIO = req.query;//obtenemos el usuario que trata de entrar al sistema
		console.log(req.param);
    usuarios.findOne({'usuario':'root'},function(err, usuario)
    {
		if(err)
		{
			res.send(500, err.message);
		}
		if(reqUSUARIO.usuario == usuario.usuario && reqUSUARIO.contrasena == usuario.contrasena)
		{
			res.status(200).jsonp(usuario);
		}else
		{
	 		res.json({ error : true })
	 	}
    });
};