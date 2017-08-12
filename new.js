

function moveRect(e) {
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    let x = 200;
    let y = 200;
    ctx.rect(x, y, 80, 20);
    ctx.fill();
}

function main(e){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width, canvas.height);
    moveRect(e);
}
