var mongoose = require('mongoose');

//RENDER THE VIEW LOGIN
exports.view = function (req, res, next)
{
  if(req.session.usuario)
  {
    res.render('cabina');
  }else
  {
    res.render('login');
  }
}

//GUARDAR NUEVO CLIENTE
exports.guardar = function(req,res,next) 
{

	//obtenemos el cliente a guardar por el request
 	var nombreCabina_req = req.body.nombreCabina;

	// creamos el objeto cliente y lo guardamos
  var cabina  = mongoose.model('cabinas');
      cabina = new cabina({
        nombre        : nombreCabina_req
    })
   cabina.save(onSaved);
   
   function onSaved (err)
   {
      if (err) {
        console.log(err)
        return next(err)
      }

      return res.send("Cabina guardada correctamente.");
    }
};

//BUSQUEDA DEL CLIENTE
exports.buscar = function(req,res,next)
{  
   var cabinas  = mongoose.model('cabinas');
   var nombreCabina_req = req.query.nombreCabina;

   cabinas.find({nombre: new RegExp(''+nombreCabina_req+'','i')}, function(err, cabinas)
    {
        if(err) res.send(500, err.message);
        res.status(200).jsonp(cabina);
    });
   
  //res.json([{ nombre : 'giovanny'},{nombre:'efra'}]);
}