$(document).ready(function() {
    $("#truck").animate({marginLeft: "+=50%"}, speed);
    // $("#truck").animate({marginLeft: "-=700"}, 1000)

    var yellow = $(".color1")
    var red = $(".color2")
    var green = $(".color3")
    var speed = 2000;

    function animate1 () {
    	$(".fruits").text("Mango")
    	$(yellow).animate({'background-color': '#FBDB0C'}, speed, function(){ 
    		$(".fruits").text("Forest Fruits");
    				$(yellow).animate({'background-color': '#6666cc'}, speed, function(){  //fruit of the forest
    					$(".fruits").text("Lemon");
    						$(yellow).animate({'background-color': '#B0FC23'}, speed, function(){ //lemon
    							$(".fruits").text("Strawberry");
    								$(yellow).animate({'background-color': '#ff4d4d'}, speed, function(){ //strawberry
    									$(".fruits").text("Orange");
    										$(yellow).animate({'background-color': '#FFA500'}, speed, function(){ //orange
    											animate1();
    										});
    									}); 
    							}); 
    					}); 
    			});
    }
    animate1(); 

    // function animate2 () {

    // 	$(red).animate({'background-color': '#ff4d4d'}, speed, function(){
    // 		$(red).animate({'background-color': '#cc0000'}, speed, function(){
    // 			$(red).animate({'background-color': '#ff7f7f'}, speed, function(){
    // 				$(red).animate({'background-color': '#b20000'}, speed, function(){
    // 					$(red).animate({'background-color': '#ff3232'}, speed, function(){
    // 						animate2();
    // 					});
    // 				}); 
    // 			}); 
    // 		}); 
    // 	});
    // }
    // animate2(); 

    // function animate3 () {

    // 	$(green).animate({'background-color': '#B0FC23'}, speed, function(){
    // 		$(green).animate({'background-color': '#C3F42E'}, speed, function(){
    // 			$(green).animate({'background-color': '#1e8133'}, speed, function(){
    // 				$(green).animate({'background-color': '#45de07'}, speed, function(){
    // 					$(green).animate({'background-color': '#73D77E'}, speed, function(){
    // 						animate3();
    // 					});
    // 				}); 
    // 			}); 
    // 		}); 
    // 	});
    // }
    // animate3(); 

});

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(52.343824, 4.850269), 
    zoom: 14
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  addMaker(amsterdam, map); 
}

function addMaker (location, map) {
	var marker = new google.maps.Marker({
		position:location,
		label: labels[labelIndex++ % labels.length],
		maps: map
	}) ; 

}