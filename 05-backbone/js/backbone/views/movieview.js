var movieview = Backbone.View.extend({

	  initialize: function() {
	  	this.render();
  },

  		render: function() {


          localStorage.setItem('key', JSON.stringify(peliculas));
          //devuelve = JSON.parse(localStorage.getItem('key'));
          //temp = _.template($('#some-template').html());
          //$('#divmovies').html("<div></div>");
          //$('#divmovies').append(temp(devuelve))
 			
  		},

  		
  		events: {
  			"click .ejecuta": "ejecuta"
  		},

  		ejecuta: function(){
  			this.render();
  			console.log('Se hizo click');
  		}


});
	

