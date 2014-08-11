$(document).on('ready',startAPP);

function startAPP()
{	
	$("#btn-salir").on('click', salir );
	$("#menu").on('click', '.close', function(){
		$("#menu").removeClass("fadeOutLeftBig")
		delay( '$("#menu").addClass("fadeOutLeftBig");', 1 )
	});	

	$("#menu").on('click', '.item-contenido', abrir_contenido );	
}

function salir()
{
	controller.call({
		url:'/salir',
		ajaxType: 'POST'
	},function(response){
		window.location = response.redirect;
	});
}

//Funcion para abrir contenido del menu
function abrir_contenido()
{

}