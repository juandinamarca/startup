var timelinetrend = Backbone.View.extend({
	events:{
		"click": "_click",
	},
	
	initialize: function(){
		this.render();
	},

	render: function(){
		console.log("Hola");
		var el = $(this.el);
		console.log(listTrend.toJSON());
		listTrend.each(function(model){
			var template= _.template($("#strendsline").html());
			var html = template(model.toJSON());
			el.append(html);

		});


	},
	_click: function(e){
		e.preventDefault();
		var _id= $(e.target).data("id");
		
		Backbone.history.navigate("TweetT/"+_id,{trigger:true});
	}	
	
});