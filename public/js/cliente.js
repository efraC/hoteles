$(document).on('ready',startAPP);
var resultado_busqueda = null;

function startAPP()
{	

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
			url: $input.attr("controller")
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