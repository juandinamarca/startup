var blockedusersview = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		var el = $(this.el);
		this.collection.each(function(model){
		var template= _.template($("#sblockedusers").html());
		var html = template(model.toJSON());
		el.append(html);
		});
	}

});