$(document).on('ready',startAPP);
var resultado_busqueda = null;

function startAPP()
{	

	$("#btn-guardarCliente").on('click',guardar_cliente);
}

function guardar_cliente()
{
	controller.call(
	{
		 url:"/cliente/guardar",
		 ajaxType:'POST',
		 parametros:{
			    	nombre: 		 $.trim($("#txt-nombreCliente").val()),
			   		fechaNacimiento: $.trim($("#txt-fechaNacimiento").val()),
			   		telefono: 		 $.trim($("#txt-telefono").val()),
			   		direccion: 		 $.trim($("#txt-direccion").val())
		 		}
	},
	function(response){
		$("#txt-nombreCliente").val("");
		$("#txt-fechaNacimiento").val("");
		$("#txt-telefono").val("");
		$("#txt-direccion").val("");
	});
}

//Funcion para buscar clientes
function buscar_cliente(){
	var $input = $('.busqueda');
	if( $input.val().trim() == '')
		return;

	controller.search({
			parametros:{
				nombre : $input.val()
			},
			url: '/cliente/buscar'
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
								'<span>' + resultado.nombre + '</span>' +
								'<span>' + resultado.telefono + '</span>' +
							'</li>')
			})

			console.log(resultado_busqueda);
		});
}