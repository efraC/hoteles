$(document).on('ready',startAPP);

function startAPP()
{	
	$("#btn-salir").on('click', salir );	
}

function salir()
{
		$.ajax({
		  type: "POST",
		  contenType: 'JSON', 
		  url: "/salir"
		})
		 .success(function (response) 
		{
			window.location = response.redirect;
		})
		.error(function (xhr, status) 
		{
		});
}