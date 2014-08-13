var mongoose = require('mongoose');


//RENDER THE VIEW LOGIN
exports.view = function (req, res, next)
{
  if(req.session.usuario)
  {
    res.render('empleado');
  }else
  {
    res.render('login');
  }
}

//GUARDAR NUEVO CLIENTE
exports.guardar = function(req,res,next) 
{

	//obtenemos el cliente a guardar por el request
 	var nombre_req = req.body.nombre;
 	var fechaNacimiento_req = req.body.fechaNacimiento;
 	var telefono_req  = req.body.telefono;
 	var direccion_req = req.body.direccion;

	// creamos el objeto cliente y lo guardamos
  var empleado  = mongoose.model('empleados');
      empleado = new empleado({
        nombre        : nombre_req,
        fechaNacimiento   : fechaNacimiento_req,
        telefono        : telefono_req,
        direccion : direccion_req
    })
   empleado.save(onSaved);
   
   function onSaved (err)
   {
      if (err) {
        console.log(err)
        return next(err)
      }

      return res.send("Empleado guardado correctamente.");
    }
};

//BUSQUEDA DEL CLIENTE
exports.buscar = function(req,res,next)
{  
   var empleados  = mongoose.model('empleados');
   var nombreempleado_req = req.query.nombre;

   empleados.find({nombre: new RegExp(''+nombreempleado_req+'','i')}, function(err, empleados)
    {
        if(err) res.send(500, err.message);
        console.log(empleados);
        res.status(200).jsonp(empleados);
    });
   
  //res.json([{ nombre : 'giovanny'},{nombre:'efra'}]);
}