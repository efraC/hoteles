$(document).on('ready',startAPP);

function startAPP()
{	

	$("#menu").on('click', '.close', function(){
		$("#menu").removeClass("fadeOutLeftBig")
		delay( '$("#menu").addClass("fadeOutLeftBig");', 1 )
	});	

	$("#menu").on('click', '.item-contenido',function()
		{
			if( $(this).hasClass("salir") )
			{
				salir();
				return;
			}
		 	abrir_contenido(this);
		});	
}

function salir()
{
	controller.call({
		url:'/salir',
		ajaxType: 'POST',
		typereturn: returnType.JSON
	},function(response){
		console.log(typeof response);
		console.log(response);
		window.location = response.redirect;
	});
}

//Funcion para abrir contenido del menu
function abrir_contenido(controlador)
{
	var controlador_ = $(controlador).attr('controller');
	if(controlador_)
	{
		controller.call({
				url: controlador_ ,
				selector:'views'
			});
	}
}