var mongoose = require('mongoose');
//var cliente  = mongoose.model('cliente');

//RENDER THE VIEW LOGIN
exports.view = function (req, res, next)
{
  if(req.session.usuario)
  {
    res.render('cliente');
  }else
  {
    res.render('login');
  }
}

//GUARDAR NUEVO CLIENTE
exports.guardar = function(req,res,next) 
{

	//obtenemos el cliente a guardar por el request
 	var nombre_req = req.body.nombre.toLowerCase();
 	var fechaNacimiento_req = req.body.fechaNacimiento.toLowerCase();
 	var telefono_req  = req.body.telefono.toLowerCase();
 	var direccion_req = req.body.direccion.toLowerCase();

	// creamos el objeto cliente y lo guardamos
  var cliente  = mongoose.model('clientes');
      cliente = new cliente({
        nombre        : nombre_req,
        fechaNacimiento   : fechaNacimiento_req,
        telefono        : telefono_req,
        direccion : direccion_req
    })
   cliente.save(onSaved);
   
   function onSaved (err)
   {
      if (err) {
        console.log(err)
        return next(err)
      }

      return res.send("cliente guardado correctamente.");
    }
};

//BUSQUEDA DEL CLIENTE
exports.buscar = function(req,res,next)
{  
   var clientes  = mongoose.model('clientes');
   var nombrecliente_req = req.query.nombre;

   clientes.find({nombre: new RegExp(''+nombrecliente_req+'')}, function(err, clientes)
    {
        if(err) res.send(500, err.message);
        console.log(clientes);
        res.status(200).jsonp(clientes);
    });
   
  //res.json([{ nombre : 'giovanny'},{nombre:'efra'}]);
}