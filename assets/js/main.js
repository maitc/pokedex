$(document).ready(function(){
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon/',
		type: 'GET',
		dataType: 'json',
		data: {"limit": '718'},
	})
	.done(function(e) {
		console.log(e);
		console.log("success");
		e.results.forEach(function(n, f){
			//se le suma mas uno a f para que empiece de cero.
			var pho = f + 1;
			//se llama clase de div (html) para alojar a todos los pokemones
			$(".house-pokemon").append("<div class='name-pokemon col-md-4' id='modal'><img src='http://pokeapi.co/media/img/" + pho + ".png' class='center-block'><h3 class='title-pokemon'>" + n.name + "</h3></div>");
			//$('#myModal').modal(options);
			
		})
		 //se crea modal atraves del DOM
		var mod = $(".name-pokemon");
		$(mod).click(function(){
			$(".container-modal").append('<div class="modalito"></div>');
		})
	})	
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});	

})	