var mongoose = require('mongoose');
var usuarios  = mongoose.model('cliente');

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