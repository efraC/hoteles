$(document).on('ready', inicializar );

//Funcion para inicializar eventos
function inicializar(){
	$("input").off();
	$('input[enter]').on('keyup',function(e){
		
		//Validamos si la tecla presionada fue enter
		if( e.keyCode == 13 || e.which == 13){
			$.globalEval( $(this).attr('enter') )
		}
		else if( $(this).hasClass("busqueda") )
		{
			if( $(this).val().trim() == '')
				$('.busqueda-resultado').remove();
		}
	});
}

/*Giovanny Reyes Ojeda.*/
var returnType = 
{
	 DEFAULT:'default',
	 JSON: "json"
}

var controller = { 
    call:function (options,callback) {
		if( !options )
		{
			console.log("Options is undefined in controller.call()");
			//mensaje.notificacion("Options is undefined in controller.call()",{titulo:'FrameWorkError',tipo:'error',icono:'icon-spam'});
			return;
		}

		var configuracion = {
		    ajaxType : 'GET',
		    parametros : {},
		   	typereturn: returnType.DEFAULT,
		   	showMessage: true,
		   	async: false,
			selector:''
		}
	    var result = null;
	    configuracion = $.extend( configuracion , options );

		//Start Call Controller Via Ajax.
		$.ajax({
			    url: configuracion.url,
			    contenType: 'application/html; charset=utf-8',
			    data: configuracion.parametros,
			    type: configuracion.ajaxType,
			    async: configuracion.async,
			    dataType: 'text'
			})
			.success(function (response){
				if( configuracion.selector )
				{

					var $selector = ( $('#' + configuracion.selector) ? $('#' + configuracion.selector) : $('.' + configuracion.selector) )
					$selector.html(response);
					$selector.addClass("flipInX");
					
					configuracion.showMessage = false;
					configuracion.typereturn = returnType.DEFAULT;
					inicializar();
				}
	            if(configuracion.showMessage && configuracion.typereturn != returnType.JSON)
	            {
					mensaje.notificacion(response);
	            }
	            if(configuracion.typereturn == returnType.JSON)
	            {
	            	result = $.parseJSON(response);
	            }

				if ( callback && typeof callback == 'function' )
				{
					if(configuracion.typereturn == returnType.JSON)
						callback($.parseJSON(response));
					else
						callback( response );

				}
	        })
	        .error(function (xhr, status) {
	              mensaje.notificacion(response +" " + status ,{tipo:'error'});
	        });

	    //Regresamos el jotason
	    return result;
    },
    search: function(options,callback){
    	//Validamos que se mandaran las funciones
    	if( !options && typeof options != 'object')
		{
			console.log("Options is undefined in controller.search()");
			return;
		}
		var configuracion = {
		    parametros : {},
		    url:'',
		    showMessage:false
		}
	    configuracion = $.extend( configuracion , options );

		var	response = controller.call({
				url : configuracion.url,
				parametros : configuracion.parametros,
				typereturn : returnType.JSON
			});

		//Hacemos el callback de la busqueda
		if( callback && typeof callback == 'function')
			callback(response);
    }
}

var mensaje = { 
    notificacion: function (mensaje_ , callback, opciones){

    		if(typeof mensaje_ == "object" ){ //Si mensaje es objeto quiere decir que me mandaron las opciones!
					opciones = mensaje_;
					mensaje_ = 'Mensaje de la notificacion.';
			}
			if(typeof callback == "object"){ //Si callback es objeto quiere decir que me mandaron las opciones!
					opciones = callback;
			}
			if(mensaje_ === undefined){
				mensaje_ = 'Mensaje de notificacion.';
			}

			if (callback === undefined){
				callback = function(){};
			}

			var configuracion = {
				titulo  : 'Notificación: ',
				mensaje : mensaje_,
				tipo 	: 'exito',
				icono 	: 'icon-checkmark-circle'
			}
			var acciones = {
				cerrar : function(){
					$("#notify").removeClass("fadeInRight");
					$("#notify").addClass("fadeOutRight");
					$("#nf-container").children().first().remove();
				}
			}
			configuracion = $.extend( configuracion , opciones );

			var notificacion ='<div id="notify" class="animated fadeInRight nf-success nf-open">'
				+'<div class="nf-icon"><span class="fa-check-circle-o"></span></div>'
				+'<div class="nf-body">'
					+'<span>'+configuracion.mensaje+'</span>'
				+'</div>'
			+'</div>';
			$("#nf-container").append(notificacion);
			

			//delay('$("#nf-container").addClass("fadeOutLeft");',3000)
           
			 setTimeout(function(){	
					acciones.cerrar();
					callback();
			 	}, 5000);
	}
}
function delay( funcion, tiempo ){
	var time = ( tiempo && typeof tiempo == 'number' ? tiempo : 2000)	
	
	setTimeout(function() {
		if(funcion && typeof funcion == 'function')
			funcion();
		else
			$.globalEval(funcion);

	}, time);
}
