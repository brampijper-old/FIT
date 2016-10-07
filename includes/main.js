$(document).ready(function() {
    $("#firstLine").hide();
    $("#secondLine").hide();
    $("#thirdLine").hide();


    $("#truck").animate({marginLeft: "+=50%"}, 3000);

    setTimeout(function() {
        $("#firstLine").slideDown('slow');
        }, 3000)

      setTimeout(function() {
        $("#secondLine").slideDown('slow');
        }, 4500)

            setTimeout(function() {
        $("#thirdLine").slideDown('slow');
        }, 6500)

  



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