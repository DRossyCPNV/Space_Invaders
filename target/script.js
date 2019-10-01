class Vessels{
    pos_x;
    pos_y;
    width;
    height;
    speed;
    timeDelta;

    constructor(pos_x, pos_y, width, height){
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.width = width;
        this.height = height;
        this.speed = 0;
        this.timeDelta = 0;
    }

    setPosition (){
        this.pos_x += this.speed * (this.timeDelta / 1000);
    }
}
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
function draw() {
    erase();
    drawVessel();
}

function erase() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawVessel() {
    vessel.setPosition();
    ctx.fillStyle = '#00f8ff';
    ctx.fillRect(vessel.pos_x, vessel.pos_y, vessel.width, vessel.height);
}
