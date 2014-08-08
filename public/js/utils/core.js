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
		   	async: false
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
	            if(configuracion.showMessage && configuracion.typereturn != returnType.JSON)
	            {
					//mensaje.notificacion(response);
	            }
	            if(configuracion.typereturn == returnType.JSON)
	            {
	            	result = $.parseJSON(response);
	            }

				if ( callback && typeof callback == 'function' )
				{
					callback( $.parseJSON(response) );
				}
	        })
	        .error(function (xhr, status) {
	              //mensaje.notificacion(response +" " + status ,{tipo:'error'});
	              console.log("erorr :c" + " " + status);
	        });

	    //Regresamos el jotason
	    return result;
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