$(document).ready(function() {
    $("#truck").animate({marginLeft: "+=50%"}, speed);
    // $("#truck").animate({marginLeft: "-=700"}, 1000)

    var yellow = $(".color1")
    var red = $(".color2")
    var green = $(".color3")
    var speed = 2000;

    function colorAnimate () {
    	$(".fruits").text("Mango")
    	$(yellow).animate({'background-color': '#FBDB0C'}, speed, function(){ 
    		$(".fruits").text("Forest Fruits");
    				$(yellow).animate({'background-color': '#6666cc'}, speed, function(){  //fruit of the forest
    					$(".fruits").text("Strawberry");
    						$(yellow).animate({'background-color': '#ff4d4d'}, speed, function(){ //strawberry
    							$(".fruits").text("Lemon");
    								$(yellow).animate({'background-color': '#B0FC23'}, speed, function(){ //lemon
    									$(".fruits").text("Orange");
    										$(yellow).animate({'background-color': '#F7882F'}, speed, function(){ //orange
    											colorAnimate();
    										});
    									}); 
    							}); 
    					}); 
    			});
    }
    colorAnimate(); 
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