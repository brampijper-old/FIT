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


//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}


var myCenter = new google.maps.LatLng(41.878114, -87.629798);

function initialize() {
var mapProp = {
center:myCenter,
zoom:12,
scrollwheel:false,
draggable:false,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
position:myCenter,
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);