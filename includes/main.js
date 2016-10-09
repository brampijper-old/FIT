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


var showFallingCones = false; 

//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
showFallingCones = true;
stopAnimation(); 

}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
showFallingCones = false; 
stopAnimation(); 

}

function stopAnimation () {
    console.log(showFallingCones)
//start animating falling icecreams
if (showFallingCones == true) {
    animateCones();
    spawnRandomObject(); 
} else {
    return; 
}
}



// get a refrence to the canvas and its context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// newly spawned objects start at Y=25
var spawnLineY = 0;

// spawn a new object every 1500ms
var spawnRate = 1500;

// when was the last object spawned
var lastSpawn = -1;

// this array holds all spawned object
var objects = [];

// save the starting time (used to calc elapsed time)
var startTime = Date.now();

var img1 = new Image();
img1.src = "pic/brownice.png";

var img2 = new Image();
img2.src = "pic/pinkice.png";

var img3 = new Image();
img3.src = "pic/blueice.png";

// Our images array
var images = [img1, img2, img3];

function spawnRandomObject() {

    // select a random type for this new object
    var t;

    // About Math.random()
    // Math.random() generates a semi-random number
    // between 0-1. So to randomly decide if the next object
    // will be A or B, we say if the random# is 0-.49 we
    // create A and if the random# is .50-1.00 we create B

    if (Math.random() < 0.50) {
        t = "red";
    } else {
        t = "blue";
    }

    // create the new object
    var object = {
        // set this objects type
        type: t,
        // set x randomly but at least 15px off the canvas edges
        x: Math.random() * (canvas.width - 30) + 15,
        // set y to start on the line where objects are spawned
        y: spawnLineY,
        // give random image
        image: images[Math.floor(Math.random()*images.length)]
    }
    // add the new object to the objects[] array
    objects.push(object);
}



function animateCones() {

    // get the elapsed time
    var time = Date.now();

    // see if its time to spawn a new object
    if (time > (lastSpawn + spawnRate)) {
        lastSpawn = time;
        spawnRandomObject();
    }

    // request another animation frame
    requestAnimationFrame(animateCones);

    // clear the canvas so all objects can be 
    // redrawn in new positions
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // draw the line where new objects are spawned
    ctx.beginPath();
    ctx.moveTo(10.5, 0);
    ctx.lineTo(30, 30);
    ctx.stroke();
    
    // move each object down the canvas
    for (var i = 0; i < objects.length; i++) {
        var spawnRateOfDescent = 1.0;
        var object = objects[i];
        object.y += spawnRateOfDescent;
        ctx.drawImage(object.image, object.x, object.y, 45, 45);
    }

}



