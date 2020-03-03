// Muestra el menu en dispositivos moviles y tablet
$('.container__toggle').on('click', function(){
	$('.header__ul').toggleClass('mostrar');
});
// Le da la clase active cada ves que se presiona un boton del menu
$('.header__li').on('click', function(){
	$(this).addClass('active').siblings().removeClass('active');
});
// Oculta y muestra la sesion declientes
$('.clientes__a').on('click', function(){
	$('.nuevo').slideToggle(); // cuando haga  click en clientes__a quiero que el container .nuevo se extienda
	$(this).toggleClass('texto');
});
// oculta y muestra el formulario para registrarse
$('.formulario__subtitle__registrar').on('click', function(){
	$('.registrarte').slideToggle();
});

// Coloca el menu fixed
let banner_top = $('.banner').offset().top; //Aqui capturo el top que tiene el banner es decir la distancia entre la parte superior del navegaor hasta donde termina.. el scroll top el 64px
$(window).on('scroll', function(){
	let scroll_realizado = $(window).scrollTop(); //aqui capturo el scroll que voy haciendo 
	if (scroll_realizado >= banner_top) { //aqui comparo si el scroll que voy haciendo es mayor al scroll top que guarde.. cuando sea mayor coloco el menu fijo 
		// $('.header').addClass('fixed');
		$('.header__logo').css('color','#67A2C0');
	}else {
		// $('.header').removeClass('fixed');
		$('.header__logo').css('color','#fff');
	}
});


// colocar el iconol input de color azul despues de agregar un valor 
let inputs = document.getElementsByClassName('formulario__input') //guardo todos los input en la variable inputs
for(let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('keyup',function(){ // a todos los input le digo que escuchen el evento keyup(presionar una tecla)
		if(this.value.length >=1) { // digo si el valor del input es mayor o igual a uno agregale la clase pintar
			this.nextElementSibling.classList.add('pintar')
		}else {
			this.nextElementSibling.classList.remove('pintar')
		}
	})
}
