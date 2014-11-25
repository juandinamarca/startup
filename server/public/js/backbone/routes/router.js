var router = Backbone.Router.extend({
	routes:{
		"BlockedUsers" : "BlockedUsers",
		"Trends": "Trends",
		"Tweet/:id": "Tweet",
		"TweetT/:id": "TweetT",
		"Trend/:url" : "Trend",
		"BlockedUsers" : "BlockedUsers",
		"Home" : "Home"
	},


		BlockedUsers: function () {
			var busersview = new blockedusersview({el:$('#tableTweets5'),collection:listp});
			console.log("BlockedUsers");
		},

		Trends: function(){
			//var item = listTrends.
			console.log("Trends");
			var	trendsview = new trendsView({el:$('#tableTweets2'),collection:listTrends});
			
			
		},

		Tweet: function(id){
			var item = listTweets.get(id);
			
			console.log("Tweet");
			$('#tableTweets').html('');
			var tweetview = new tweetView({el:$('#tableTweets1'),model:item}); 
		},
		
		TweetT: function(id){
			var item = listTrend.get(id);
			console.log("TweetT");
			//$('#tableTweets2').html('');
			$('#tableTweets4').html('');
			var tweetTview = new tweetView({el:$('#tableTweets1'),model:item}); 
		},

		Trend: function(url){
			console.log("Trend");
			var it= url;
			console.log(it);
			//item = listTrend.get(id_)
			//listTrend = new listTweetsTrend([], { url: 'http://localhost:3000/search?q='+_url });
			//listTrend.fetch();
			//console.log(listTrend.toJSON());
			$('#tableTweets2').html('');
			var trendview = new timelinetrend({el:$('#tableTweets4'),collection:listTrend});
			//var trendview = new timelinetrend({el:$('#tableTweets4')});
		},

		Home : function(){
			var	view = new timeline({el:$('#tableTweets'),collection:listTweets});
			console.log('Home');
		}

});

var route = new router();
Backbone.history.start();
//Backbone.history.navigate("Home");

