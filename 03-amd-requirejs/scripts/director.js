define('director',
		function (){

			var director = function (name) {
				this.name=name;
				this.quotes=[];
			};

			director.prototype.set = function(attr,value) {
				this[attr]=value;
			}

			director.prototype.speak = function() {
				console.log(this.name+' says: '+this.quotes.toString());
			}

			return director;

});











