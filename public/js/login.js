$(document).on('ready',startAPP);

function startAPP()
{	
	$("#btn-entrar").on('click', entrar );	
}

function entrar()
{
	var userObject = 
		{
			usuario: $("#txt-usuario").val(),
			contrasena : $("#txt-contrasena").val()
		};
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
				alert("error");
			}else
			{
				window.location = response.redirect;
			}
		
			console.log(response);
		})
		.error(function (xhr, status) 
		{
			console.log(status);
		});
}
