$(document).on('ready',startAPP);
var resultado_busqueda = null;

function startAPP()
{	

	$("#btn-guardarCabina").on('click',guardar_cabina);
}

function guardar_cabina()
{
	controller.call(
	{
		 url:"/cabina/guardar",
		 ajaxType:'POST',
		 parametros:{
			    	nombreCabina: $.trim($("#txt-nombreCabina").val())
		 		}
	},
	function(response){
		$("#txt-nombreCabina").val("");
	});
}

//Funcion para buscar clientes
function buscar_cabina(){
	var $input = $('.busqueda');
	if( $input.val().trim() == '')
		return;

	controller.search({
			parametros:{
				nombre : $input.val()
			},
			url: '/cabina/buscar'
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