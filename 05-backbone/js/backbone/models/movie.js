var movie = Backbone.Model.extend({
	initialize: function () {
		console.log('Se ha creado una nueva instancia ')
		this.on('change',function () {
			console.log('El modelo ha cambiado');
		})

	},
	defaults:{
		name: 'Pelicula Desconocida',
		director: 'Director Desconocido',
	}
});