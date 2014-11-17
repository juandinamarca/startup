$(document).ready(function(){

	$('#add').click(function(){
		movie1 = new movie({id:numid,name:title.value,year:year.value,duration:duration.value,description:description.value,director:director.value});
		numid ++;
		peliculas.add(movie1);
		vista.render();


	});

	$('#delete').click(function(){
	peliculas.remove(peliculas.get( $('#textdelete').val() ) );
	vista.render();


	});


	$('#save').click(function(){
		_id = $('.panel_seleccionado').data('id');
		item = peliculas.get(_id);
		item.set('name',$('title').val());


	});


	


	peliculas = new movies();
	
	

	devuelve = JSON.parse(localStorage.getItem('key'));
	peliculas.add((devuelve));
	var numid = peliculas.length+1;

	vista = new movieview();


	peliculas.on({"add":onchangemovie,"remove":onchangemovie, 'change':onchangemovie});


	function onchangemovie (model,collection) {
		$("#panel").html("<div></div>");
		peliculas.each(muestra);

	}


    function muestra(data){
        var $div = $("<li>", {id: "ref_panel_"+data.cid});
        $div.html(data.get("id")+': '+data.get("name"));
        $("li").click(function(){
        $(this).toggleClass("panel_seleccionado");
        if($.seleccionado != undefined && $.seleccionado.data("id") != $(this).data("id")){
        $.seleccionado.toggleClass("panel_seleccionado");
        }
        $.seleccionado = $(this);
        });
        

        $("#panel").append($div);

    }
	
	//peliculas.remove(peliculas.findWhere({'name':'Maradona'}) );
	//peliculas.remove(peliculas.findWhere('name':'Maradona'));
	//peliculas.remove(ok);
	//ok = peliculas.findWhere({name:'Murcielago'});
	
	
})



