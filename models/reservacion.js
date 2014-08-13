var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
 
var reservacion_schema = new Schema({
  fechaReservacion      :   Date,
  cliente_id    : { type: ObjectId, ref: 'cliente_schema' },
  cabina_id    :  { type: ObjectId, ref: 'cabina_schema' }
})

module.exports = mongoose.model('reservaciones', reservacion_schema)