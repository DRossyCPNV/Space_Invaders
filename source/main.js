//Create Context
var canvas = document.getElementById('myCanvas');

if(canvas.getContext){
    var ctx = canvas.getContext('2d');
}
else {
    document.getElementById('noCanvas').innerHTML = 'Canvas not supported on your browser';
}

//Add Event Listener
window.addEventListener('keydown', StartMovement, true);
window.addEventListener('keyup', StopMovement, true);

//Create Vessel
var vessel = new Vessels(10,10,10,10,);

function StartMovement(event) {
    var speed = 0;
    if (event.keyCode === 68){
        speed = 5;
    }
    if (event.keyCode === 65){
        speed = -5;
    }
    vessel.speed = speed;
    setInterval(function () {vessel.timeDelta += 1}, 1);
}

function StopMovement(event) {
    var speed = 0;
    vessel.speed = speed;
    vessel.timeDelta = 0;
}

function main() {
    setInterval(function () {
        draw();
        }
    , 20);
}
