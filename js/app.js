class UI {
    addcommentary(objetoComentario){
        let padre = document.getElementById('padre')
        let hijo = document.createElement('div')
        hijo.setAttribute('class','nd-item m-33 clientes__container ')
        hijo.innerHTML = `
                    <div class="clientes__caja__1 espacioCadaCliente">
						<img src="https://picsum.photos/200/133?random" alt="Foto de ${objetoComentario.cliente}" class="clientes__img">
					</div>
					<div class="clientes__caja__2 espacioCadaCliente">
						<p class="clientes__info">${objetoComentario.comentario}
						    <cite class="clientes__nombre">${objetoComentario.cliente}</cite>
						</p>
					</div>
        
                     `
        padre.appendChild(hijo)
    }
}
class Comentario {
    constructor(cliente,comentario) {
        this.cliente = cliente
        this.comentario = comentario
    }
}
document.getElementById('form_comentario').addEventListener('submit',function(e){
    let cliente = document.getElementById('cliente').value
    let comentario = document.getElementById('comentario').value

    const objetoComentario = new Comentario(cliente,comentario)

    const interfaz = new UI()

    interfaz.addcommentary(objetoComentario)

    e.preventDefault()
})