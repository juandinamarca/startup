/*

function movie (title,duration) {
    this.title=title;
    this.duration=duration;
    this.play=play;
    this.stop=stop;
    this.set=set;
    this.actors=[];
}

var social = {

	share: function share (friend) {
		$.publish('Sharing',[this.title,friend]);
	},

	like: function like () {
		$.publish('Liked',this.title);
	}
};

$.extend( movie.prototype, social );

movie.prototype.DownloadableMovie = function() {
	$.publish('Download',this.title);
};

movie.prototype.addactor = function(actor) {
	this.actors.push(actor);
};

movie.prototype.getitemactors = function() {
	alert(this.actors.length);
};

function play () {
    $.publish('Play',this.title);
}

function stop(){
	$.publish('Stop',this.title);
}

function set (attr,value) {
    this[attr]=value;
}


function movieObserver(){
    $.subscribe('Play',function(o,titulo){
        console.log('Playing:'+titulo);
    });

    $.subscribe('Stop',function(o,titulo){
    	console.log('Stopped :'+titulo);
    });

    $.subscribe('Download',function(o,titulo){
    	console.log('Downloading movie :'+titulo);
    });    

    $.subscribe('Sharing',function(o,titulo,friend){
    console.log('Sharing '+titulo+' with: '+friend);
    });  

    $.subscribe('Liked',function(o,titulo){
    console.log('Movie Liked :'+titulo);
    });  

}


function Actor (name,surname) {
	this.name=name;
	this.surname=surname;
}


*/


var movie = function (title,duration) {
                this.title=title;
                this.duration=duration;
                this.play=play;
                this.stop=stop;
                this.set=set;
                this.actors=[];
            }


var social = {

    share: function share (friend) {
        $.publish('Sharing',[this.title,friend]);
    },

    like: function like () {
        $.publish('Liked',this.title);
    }
};

$.extend( movie.prototype, social );

movie.prototype.DownloadableMovie = function() {
    $.publish('Download',this.title);
};

movie.prototype.addactor = function(actor) {
    this.actors.push(actor);
};

movie.prototype.getitemactors = function() {
    alert(this.actors.length);
};

function play () {
    $.publish('Play',this.title);
}

function stop(){
    $.publish('Stop',this.title);
}

function set (attr,value) {
    this[attr]=value;  
}


function movieObserver(){
    $.subscribe('Play',function(o,titulo){
        console.log('Playing:'+titulo);
    });

    $.subscribe('Stop',function(o,titulo){
        console.log('Stopped :'+titulo);
    });

    $.subscribe('Download',function(o,titulo){
        console.log('Downloading movie :'+titulo);
    });    

    $.subscribe('Sharing',function(o,titulo,friend){
    console.log('Sharing '+titulo+' with: '+friend);
    });  

    $.subscribe('Liked',function(o,titulo){
    console.log('Movie Liked :'+titulo);
    });  

}


function Actor (name,surname) {
    this.name=name;
    this.surname=surname;
}



var movie1;
movie1=new movie('Terminator',3);
//document.write('Pelicula:    '+movie1.title+'<br>');
//document.write('Duración:    '+movie1.duration+'<br>');



var movie2;
movie2=new movie('Hombre en llamas',4);
//document.write('Pelicula:    '+movie2.title+'<br>');
//document.write('Duración:    '+movie2.duration+'<br>');

var movieobserver = new movieObserver();

movie1.play();
movie2.play();
movie1.stop();
movie1.set('title','Titanic');
movie1.play();


var rocky = new movie();
rocky.set('title','rocky');
rocky.play();
movie1.DownloadableMovie();

movie1.like();
movie2.like();

movie1.share('Juan');
movie2.share('Martin');


var ironman2 = new movie();
ironman2.set('title', 'Iron Man 2');
// ...
ironman2.share('V. Rivas'); // output: Sharing Iron Man 2 with V. Rivas

var actor1 = new Actor('Silvester','Stallone');
document.write(actor1.name+'  '+actor1.surname);

var actor2 = new Actor('Apolo','Creed');
document.write(actor2.name+'  '+actor2.surname);

movie1.addactor(actor2.name);
movie1.addactor(actor1.name);

movie2.addactor(actor1.name);
movie1.getitemactors();
movie2.getitemactors();

console.log(movie2.actors.toString());
console.log(movie1.actors.toString());
