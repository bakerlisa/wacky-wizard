var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width  = window.innerWidth;
canvas.height  = window.innerHeight;

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


// Animation1
const circle = {
    x: 0,
    y:5,
    size:5,
    dx: 5,
    dy: 3,
}

function drawCircle(){
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.size,0,Math.PI * 2);
    ctx.fitllStyle = "white";
    ctx.fill();
}
function update(){
    // ctx.clearRect(0,0,canvas.width, canvas.height);
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






// var image = document.getElementById('source');

// // Animation 2 - CharacterData
// const player = {
//     w: 50,
//     h: 70,
//     x: 20,
//     y: 200,
//     speed: 10,
//     dx: 0,
//     dy: 0,
//     jumpHeight: 12,
//     shouldJump: false,
//     jumpCounter: 0,
// }

// function drawPlayer(){
//     ctx.drawImage(image, player.x, player.y, player.w, player.h);
// }

// function newPosition(){
//     player.x += player.dx;
//     player.y == player.dy;
// }

// function clear(){
//     ctx.clearRect(0,0,canvas.width,canvas.height);
// }

// function newPosition(){
//     player.x += player.dx;
//     player.y += player.dy;
//     detactWalls();
// }

// function detactWalls(){
//     // left wall
//     if(player.x < 0){
//         player.x = 0;
//     }
//     if(player.x + player.w > canvas.width){
//         player.x = canvas.width - player.w;
//     }

//     if(player.y < 0){
//         player.y = 0;
//     }
//     if(player.y+player.h > canvas.height){
//         player.y = canvas.height - player.h;
//     }
// }
// function drawText(){
//     ctx.font = "40px Ariel";
//     ctx.fillStyle = "black";
//     ctx.textAlign = "left";
//     ctx.fillText("Wacky Wizard", 25, 60);   
// }

// function update(){
//     jump();
//     clear();
//     drawText();
//     drawPlayer();
//     newPosition();
    
    
//     requestAnimationFrame(update);
// }

// function moveDown(){
//     player.dy = player.speed;
// }

// function moveUp(){
//     player.dy = -player.speed;
// }

// function moveLeft(){
//     player.dx = -player.speed;
//     image = document.getElementById('sourceR');
    
// }

// function moveRight(){
//     player.dx = player.speed;
//     image = document.getElementById('source');
// }

// function jump(){
//     if(player.shouldJump){
//         player.jumpCounter++;
//         if(player.jumpCounter < 15){
//             // go up
//             player.y -= player.jumpHeight;
//         }else if(player.jumpCounter > 14 && player.jumpCounter < 19){
//             player.y += 0;
//         }else if(player.jumpCounter < 33 ){
//             player.y += player.jumpHeight;  
//         }
//         // end cycle
//         if(player.jumpCounter >= 32){
//             player.shouldJump = false;
//         }
//     }
// }

// function keyDown(e){
//     if(e.key === "ArrowRight" || e.key === "Right"){
//         moveRight();
//     }else if(e.key === "ArrowLeft" || e.key === "Left"){
//         moveLeft();
//     }else if(e.key === "ArrowUp" || e.key === "Up"){
//         moveUp();
//     }else if(e.key === "ArrowDown" || e.key === "Down"){
//         moveDown();
//     }else if(e.code === "Space"){
//         if(!player.shouldJump){
//             // jumpSFX.play();
//             player.jumpCounter = 0;
//             player.shouldJump = true;
//         }
//     }
// }

// function keyUp(e){ 
//     if(
//         e.key == 'ArrowRight' ||
//         e.key == 'Right' ||
//         e.key == 'ArrowLeft' ||
//         e.key ==  'Left' ||
//         e.key == 'ArrowUp' ||
//         e.key == 'Up' ||
//         e.key == 'ArrowDown' ||
//         e.key == 'Down'
//     ){
//         player.dx = 0;
//         player.dy = 0;
//     }
// }

// update();

// document.addEventListener("keydown",keyDown);
// document.addEventListener("keyup",keyUp);