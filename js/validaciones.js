// let nombre = prompt('Ingrese su nombre por favor: ')
// if (nombre == "") {
// 	nombre = 'visitante'
// }
// let sexo = prompt(`Ingrese su sexo: 
// 					m -> Masculino
// 					f -> Femenino
// 				 `).toUpperCase().trim()


// const saludo = (persona,sexo) => {
// 	let saludo = sexo === 'F'
// 		? 'bienvenida'
// 		: 'bienvenido'
// 	return `${saludo} a car wash ${persona}`
// }


function validar() {
	let user, pass;
	user = document.getElementById('usuario').value;
	pass  = document.getElementById('contraseña').value;
	if (user === "" || pass === "") {
		alert('Los campos estan vacios');
		return false;
	}else if(pass.length <= 5) {
		alert('contraseña insegura, solo a colocado '+(pass.length)+' valores y son 7 minimos');
		return false;
	}
}



	