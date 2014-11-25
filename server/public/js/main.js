$(document).ready(function(){

	$('#Home').click(function(){
		route.navigate('Home',{trigger:true});
		
	});
	


	$('#Trends').click(function(){
		route.navigate('Trends',{trigger:true});
		
	});

	$('#Blockedusers').click(function(){
		route.navigate('BlockedUsers',{trigger:true});
		
	});





})