$(document).on('ready',startAPP);

function startAPP()
{	
	$("#btn-entrar").on('click', entrar );
	$('#txt-usuario').focus();
	//$("#txt-contrasena").on('keydown',entrar);	
}
function entrar()
{
	controller.call(
	{
		 url:"/entrar",
		 ajaxType:'POST',
		 parametros:{
		    	usuario: $.trim($("#txt-usuario").val()),
		   		contrasena :$.trim($("#txt-contrasena").val())
		 	},
		 typereturn : returnType.JSON
	},
	function(response){
		if(response.error)
		{
			$(".login").removeClass("shake")
			
			delay( '$(".login").addClass("shake");', 1 )
			$('#login-mensaje').show();

		}else
		{
			window.location = response.redirect;
		}
	});

	

	
		/*var userObject = 
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
		});*/
}
