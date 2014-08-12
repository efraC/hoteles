//RENDER THE VIEW LOGIN
exports.menu = function (req, res, next)
{
	if(req.session.usuario)
	{
	  	res.render('menu', { title: req.session.nombreUsuario });
   		//res.json({ redirect : '/menu' });
 	}else
 	{
 		res.redirect('/');	
 	}
}