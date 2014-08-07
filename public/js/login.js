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
		  dataType:"application/json", 
		  url: "/entrar",
		  data: userObject
		})
	  .done(function( msg )
	  {
	    alert( "Data Saved: " + msg );
	  });
}
