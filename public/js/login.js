$(document).on('ready',startAPP);

function startAPP()
{	
	$("#btn-entrar").on('click', entrar );
	$("#txt-contrasena").on('keydown',entrar);	
}
function entrar()
{
	var userObject = 
		{
			usuario: $("#txt-usuario").val(),
			contrasena : $("#txt-contrasena").val()
		};
		$(".login").removeClass("shake");
		$.ajax({
		  type: "POST",
		  contenType: 'JSON', 
		  url: "/entrar",
		  data: userObject
		})
		 .success(function (response) 
		{
			if(response.error)
			{
				$(".login").addClass("shake");

			}else
			{
				window.location = response.redirect;
			}
		})
		.error(function (xhr, status) 
		{
			console.log(status);
		});
}
