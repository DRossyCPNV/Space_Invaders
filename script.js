//All loaded scripts here
loadScript('display.js');
loadScript('Vessels.js');

//Code from StackOverflow
//https://stackoverflow.com/questions/14460231/how-do-you-import-multiple-javascript-files-in-html-index-file-without-the-bloat
function loadScript(url) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

//Create Context
var canvas = document.getElementById('myCanvas');

if(canvas.getContext){
    var ctx = canvas.getContext('2d');
}
else {
    document.getElementById('noCanvas').innerHTML = 'Canvas not supported on your browser';
}

//Create Objects
var vessel = new Vessels(10,10,10,10,);

function play() {
    setInterval(function () {
        canvas.addEventListener('keydown', checkKeyPressed, false);
        drawVessel(ctx, vessel);
        }
        , 1000
    );
}

function checkKeyPressed(event) {
    if (event.keyCode === 68){
        vessel.moveRight();
    }
    if (event.keyCode === 65){
        vessel.moveLeft();
    }
}