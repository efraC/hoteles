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
exports.guardarCliente = function(req,res,next) 
{

	//obtenemos el cliente a guardar por el request
 	var nombre_req = req.body.nombre;
 	var fechaNacimiento_req = req.body.fechaNacimiento;
 	var telefono  = req.body.telefono;
 	var direccion = req.body.direccion;

	// creamos el objeto cliente y lo guardamos
    var cliente = new cliente({
        nombre        : nombre,
        fechaNacimiento   : fechaNacimiento,
        telefono        : telefono,
        direccion : direccion
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
   var nombrecliente_req = req.body.nombre;
   var clientes  = mongoose.model('clientes');
   clientes.find(function(err, clientes) 
   {
      if(err) res.send(500, err.message);
      res.status(200).jsonp(clientes);
   })
  //res.json([{ nombre : 'giovanny'},{nombre:'efra'}]);
}