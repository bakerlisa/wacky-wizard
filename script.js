var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// let myFont = new FontFace(
//     "Yellowtail",
//     "url(https://fonts.googleapis.com/css2?family=Yellowtail&display=swap)"
//   );

// ctx.fillStyle = 'black';
// ctx.fillRect(10, 10, 100, 100);

// ctx.fillStyle = 'gray';
// ctx.fillRect(125, 125, 100, 100);

// // strokeRect
// ctx.lineWidth = "5";
// ctx.strokeStyle = "purple";
// ctx.strokeRect(200,200,100,100);

// // clearPeact
// ctx.clearRect(15,15,90,90)

// // filltext
// ctx.font = '300px Open Sans';
// ctx.fillStyle = 'teal';
// ctx.fillText("Hello World", 400, 50);

// ctx.lineWidth = "1";
// ctx.strokeStyle = "orange";
// ctx.st

// Triangle
// ctx.beginPath();
// ctx.moveTo(10,10);
// ctx.lineTo(100,10);
// ctx.lineTo(50,100);
// // ctx.lineTo(10,10);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "blue";
// ctx.fill();

// // Triangle
// ctx.beginPath();
// ctx.moveTo(110,10);
// ctx.lineTo(60, 100);
// ctx.lineTo(150,100);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "coral";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(canvas.width / 2,canvas.height/2,100,0,Math.PI * 4);
// ctx.stroke();


//Animation1
const circle = {
    x: 200,
    y:200,
    size:20,
    dx: 5,
    dy: 3,
}

function drawCircle(){
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.size,0,Math.PI * 2);
    ctx.fitllStyle = "purple";
    ctx.fill();
}
function update(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawCircle();
    circle.x += circle.dx;
    circle.y += circle.dy;

    // Detect sidewalls
    if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0 ){
        circle.dx *= -1;
    }
    // Detect to top/bottom walls
    if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0){
        circle.dy *= -1;
    }

    requestAnimationFrame(update);
}
update();