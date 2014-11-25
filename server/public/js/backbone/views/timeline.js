var timeline = Backbone.View.extend({
	events:{
		"click": "_click",
	},
	
	initialize: function(){
		
		
		this.render();
	},
	render: function(){
		var el = $(this.el);
		this.collection.each(function(model){
			//var filteredList = this.filter(this.collection.model.get('user').id ,function(num){ return num == '44196397' });
			//if( model.get('user').id == '44196397' ){
			//if( model.get('user').id == '724186104' ){ 
        	var vec = _.pluck(listp.toJSON(), 'id');
        	//var ver = _.contains([160308387,25992212], model.get('user').id)
        	var ver = _.contains(vec, model.get('user').id);
        	if (ver == false){
      			var template= _.template($("#stimeline").html());
				var html = template(model.toJSON());
				el.append(html);
    		}
    	});	


       
		//});
	},
	_click: function(e){
		e.preventDefault();
		var _id= $(e.target).data("id");
		var item = this.collection.get(_id);
		Backbone.history.navigate("Tweet/"+item.get("id"),{trigger:true});
	}	
	
});



/*

var timeline = Backbone.View.extend({
	events:{
		"click": "_click",
	},
	
	initialize: function(){
		this.render();
	},
	render: function(){
		var el = $(this.el);
		this.collection.each(function(model){
			var arreglo = this.filter(model.get('user').id ,function(num){ return num == '44196397'; });
			//if( model.get('user').id == '44196397' ){
			//if( model.get('user').id == '724186104' ){ 
        		var template= _.template($("#stimeline").html());
				var html = template(model.toJSON());
				el.append(html);
			}
		});
	},
	_click: function(e){
		e.preventDefault();
		var _id= $(e.target).data("id");
		var item = this.collection.get(_id);
		Backbone.history.navigate("Tweet/"+item.get("id"),{trigger:true});
	}	
	
});



*/


 
/*
var timeline = Backbone.View.extend({
	
	template: _.template($("#stimeline").html()),
	initialize: function(){
		this.render();
	},
	render: function(eventName){
		$(this.$el).append(this.template(this.model.toJSON()));
		return this;
	}
	
});
*/


