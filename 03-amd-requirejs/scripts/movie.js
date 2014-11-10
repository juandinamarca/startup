define('movie',
		['director'],
		function (director){

			var movie = function(title,duration,director){
				this.title=title;
   				this.duration=duration;
    			this.play=play;
    			this.stop=stop;
    			this.set=set;
    			this.actors=[];
    			this.director=director;
    			
    		} 

    		function set (attr,value) {
				this[attr]=value;	
			}

			movie.prototype.get = function(value) {
				return this[value];
			}

			function play () {
			    $.publish('Play',this.title);
			}

			function stop(){
				$.publish('Stop',this.title);
			}		


			function Actor (name,surname) {
				this.name=name;
				this.surname=surname;
			}
		
			return movie;
});

