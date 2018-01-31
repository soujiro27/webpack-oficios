const $ = require('jquery')

module.exports = class Irac {

	cancel(){ 
	//funcion del boton cancelar de los formulario
		$('button#cancelar').click(function(e) {
			e.preventDefault()
			let ruta = $(this).data('ruta')
			location.href = `/SIA/juridico/${ruta}`
		})
	}


	load_update_form(){
		$('table#main-table-oficios tbody tr').click(function(){
			let id = $(this).children().first().text()
			let ruta = $(this).data('ruta')
			location.href = `/SIA/juridico/${ruta}/${id}`
		})	
	}
}