/*Giovanny Reyes Ojeda.*/
var returnType = 
{
	 DEFAULT:'default',
	 JSON: "json"
}

var controller = 
{ 
    
    call:function (form,options,callback) 
      {
	          var controller;
	          var showMessage = true;
	          if(typeof form == "object") //Si form es objeto quiere decir que me mandaron las opciones!
	          {
	              options = form;
	          }
	          if(options === undefined || options.controller === undefined )
	          {
	          	console.log("Options is undefined in controller.call()");
	            //mensaje.notificacion("Options is undefined in controller.call()",{titulo:'FrameWorkError',tipo:'error',icono:'icon-spam'});
	            return;
	          }
	          if (callback === undefined)
	          {
	            callback = function(){};
	          }
	          if(options.controller === undefined)
	          {
	              controller = $(form).attr("controller");
	          }
	          if(options.typereturn == returnType.JSON)
	          {
	          	showMessage = false;
	          }
	          var configuracion = 
	          {
		            controller  : controller,
		            ajaxType : 'GET',
		            parametros : {},
		           	typereturn: returnType.DEFAULT,
		           	showMessage: showMessage
	          }
	          configuracion = $.extend( configuracion , options );
	          //Start Call Controller Via Ajax.
	          $.ajax({
	                url: configuracion.controller,
	                contenType: 'application/html; charset=utf-8',
	                data: configuracion.parametros,
	                type: configuracion.ajaxType,
	                async: false,
	                dataType: 'text'
	            })
	            .success(function (response) 
	            {
                    if(configuracion.showMessage)
                    {
						if (response != '')
						{
							//mensaje.notificacion(response);
							console.log(response);
						}
                    }
                    if(configuracion.typereturn == returnType.JSON)
                    {
                    	return $.parseJSON(response);
                    }
	                callback();
	            })
	            .error(function (xhr, status) 
	            {
	                  //mensaje.notificacion(response +" " + status ,{tipo:'error'});
	                  console.log("erorr :c" + " " + status);
	            });
    }
}