$(document).on('ready',startAPP);
var resultado_busqueda = null;

function startAPP()
{	

	$("#btn-guardarServicio").on('click',guardar_servicio);
}

function guardar_servicio()
{
	controller.call(
	{
		 url:"/servicio/guardar",
		 ajaxType:'POST',
		 parametros:{
			    	nombreServicio: $.trim($("#txt-nombreServicio").val()),
			    	precioServicio: $.trim($("#txt-precioServicio").val())
		 		}
	},
	function(response){
		$("#txt-nombreServicio").val("");
		$("#txt-precioServicio").val("");
	});
}

//Funcion para buscar clientes
function buscar_servicio(){
	var $input = $('.busqueda');
	if( $input.val().trim() == '')
		return;

	controller.search({
			parametros:{
				nombre : $input.val()
			},
			url: '/servicio/buscar'
		},function(response){
			resultado_busqueda = null;

			//Pintamos el resultado de la busqueda
			var $div_busqueda = $input.parents('.div-busqueda')

			//Eliminamos busquedas anteriores
			$('.busqueda-resultado').remove();
			
			var $resultado = $('<div/>',{'class': 'busqueda-resultado'})
			$div_busqueda.append( 
				$resultado.append('<ul class="busqueda-ul" >')
				);
			resultado_busqueda = response;
			$.each(response, function(index, resultado){
				
				$('.busqueda-ul')
					.append('<li>' +
							'<span class="fa-user"></span>' +
								'<span>' + resultado.nombreCabina + '</span>'+
							'</li>')
			})
		});
}