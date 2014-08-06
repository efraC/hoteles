$(document).on('ready',startAPP);

function startAPP()
{	
	$("h1").on('click', alerta );	
}

function alerta(mensaje)
{
	alert(mensaje);
}
