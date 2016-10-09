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