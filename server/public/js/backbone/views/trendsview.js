var trendsView = Backbone.View.extend({
	events:{
		"click": "_click",
	},


	initialize: function(){
		this.render();
	},
	render: function(){
			var el = $(this.el);
			this.collection.each(function(model){
			var template= _.template($("#strends").html());
			var html = template(model.toJSON());
			el.append(html);
			});
	},
	_click: function(e){
	e.preventDefault();
	var _url= $(e.target).data("url");
	console.log(_url);
	listTrend = new listTweetsTrend([], { url: 'http://localhost:3000/search?q='+_url });
	listTrend.fetch({async: false});
	Backbone.history.navigate("Trend/"+_url,{trigger:true});
	//var trendview = new timeline({el:$('#tableTweets4'),collection:listTrend});
	//console.log('Va a router');
	}	

});


