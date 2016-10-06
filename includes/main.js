$(document).ready(function() {
    $("#truck").animate({marginLeft: "+=50%"}, 3000);
    // $("#truck").animate({marginLeft: "-=700"}, 1000);

    $(".color1").animate({'background-color': '#CD5C5C'}, 5000)



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