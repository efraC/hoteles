var mongoose = require('mongoose');

//GET - Return all tvshows in the DB
exports.findAllUsers = function(req, res) {
    usuario.find(function(err, usuariot)
    {
    	if(err) res.send(500, err.message);
        	res.status(200).jsonp(usuariot);
    });
};