let canvas = document.getElementById('myCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
let x = 10;
let y = 10;
let ballradius = 20;
let dx = 10;
let dy = 10;
addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log("hi");
}); 
function drawball() {
    
 ctx.beginPath();
 ctx.arc(x , y , ballradius, 0, Math.PI*2);
 ctx.fillStyle = "green";
 ctx.fill();
 ctx.closePath();

 x += dx;
 y += dy;


 if(y > canvas.height - ballradius || y < ballradius) {
        dy = -dy;
    }
 if(x > canvas.width - ballradius || x < ballradius) {
          dx = -dx;
    }
}

function drawPaddle(x, y){
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.rect(x, y, 80, 20);
    ctx.fill();
    ctx.closePath();
}

let myFlagVariable = false;
    
setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawball();
    drawPaddle(300, 300);
    
}, 10);
