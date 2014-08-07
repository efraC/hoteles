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
		 $.post( '/entrar', { usuario: "John", contrasena: "123" },function(result)
		 {
			alert(result.error);
	 	});
}
