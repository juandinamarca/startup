$(document).ready(function(){
    $("section").fadeIn("slow");
    $("#textbox1").focus();


$("#button1").click(function(){
    $.get('http://bootcamp.ws.af.cm/welcome/Juan',function(response){
      $('#textbox1').val(response.response);
  })
    .done(function(response){
    	$('#textbox1').val(response.response).css("color","green");
    })

    .fail(function(response){
    	$('#textbox1').val("Error").css("background-color","red");
    })




});
});



