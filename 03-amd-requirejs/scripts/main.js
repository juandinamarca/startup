define('main',
		['movie','director'],
		function (movie,director){

var alien = new movie(); 
var ridleyScott = new director('Ridley Scott'); //sets name in constructor 
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']); 
alien.set('director', ridleyScott); 
document.write(alien.director.name);
alien.get('director').speak(); //output: Ridley Scott says: 'Cast is...'

});	