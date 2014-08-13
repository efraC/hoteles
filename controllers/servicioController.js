var mongoose = require('mongoose');

//RENDER THE VIEW LOGIN
exports.view = function (req, res, next)
{
  if(req.session.usuario)
  {
    res.render('servicio');
  }else
  {
    res.render('login');
  }
}

//GUARDAR NUEVO CLIENTE
exports.guardar = function(req,res,next) 
{

	//obtenemos el cliente a guardar por el request
 	var nombreServicio_req = req.body.nombreServicio;
  var precioServicio_req = req.body.precioServicio;

	// creamos el objeto cliente y lo guardamos
  var servicio  = mongoose.model('servicios');
      servicio = new servicio({
        nombreServicio  : nombreServicio_req,
        precioServicio : precioServicio_req
    })
   servicio.save(onSaved);
   
   function onSaved (err)
   {
      if (err) {
        console.log(err)
        return next(err)
      }

      return res.send("Servicio guardado correctamente.");
    }
};

//BUSQUEDA DEL CLIENTE
exports.buscar = function(req,res,next)
{  
   var servicios  = mongoose.model('cabinas');
   var nombreServicio_req = req.query.nombreServicio;

   servicios.find({nombre: new RegExp(''+nombreCabina_req+'','i')}, function(err, servicios)
    {
        if(err) res.send(500, err.message);
        res.status(200).jsonp(servicios);
    });
   
  //res.json([{ nombre : 'giovanny'},{nombre:'efra'}]);
}