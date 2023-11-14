const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let image = new Image();
image.src = "./res/img/dvd.png";
let x = 0;
let y = 0;
xVelocity = 0.5;
yVelocity = 0.5;
let imageWidth = 50;
let imageHeight = 100;

const changeColor = (red, green, blue) => {
  element.style.color = `rgb(${red}, ${green}, ${blue})`;
};

window.addEventListener("resize", () =>{
  resizeCanvas();
});

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onload= ()=>{
    resizeCanvas();
    setInterval(()=>{
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        x+= xVelocity;
        y+= yVelocity;
        if(y + imageHeight >= canvas.height || y <=0){
            yVelocity *= -1;
            
        changeColor(image, getRandomNumber(0, 255), getRandomNumber(0, 255), getRandomNumber(0, 255));
        }
        if(x + imageWidth >= canvas.width|| x <=0){
            xVelocity *= -1;
        changeColor(image, getRandomNumber(0, 255), getRandomNumber(0, 255), getRandomNumber(0, 255));
        }
        ctx.drawImage(image, x, y, imageHeight, imageWidth);
    }, 1)
}


const getRandomNumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;



/*ctx.fillRect(100, 200, 80, 150);

ctx.strokeStyle = "blue";
ctx.strokeRect(200,200,80,150);

ctx.fillStyle = "pink";
ctx.fillRect(300, 200, 80, 150);


ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50,100);
ctx.lineTo(100,100);
ctx.lineTo(50,50);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.moveTo(200,50);
ctx.arc(160, 50, 40, 0, 2 * Math.PI);
ctx.moveTo(145,30);
ctx.lineTo(145,50);
ctx.moveTo(170,30);
ctx.lineTo(170,50);
ctx.moveTo(145,70);
ctx.lineTo(170,70);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.moveTo(350,40);
ctx.lineTo(450,40);
ctx.lineTo(400,10);
ctx.lineTo(350,40);

ctx.moveTo(365,40);
ctx.lineTo(365,90);
ctx.lineTo(435,90);
ctx.lineTo(435,40);

ctx.moveTo(370,90);
ctx.lineTo(370,70);
ctx.lineTo(380,70);
ctx.lineTo(380,90);

ctx.moveTo(390,70);
ctx.lineTo(403,70);
ctx.lineTo(403,83);
ctx.lineTo(390,83);
ctx.lineTo(390,70);

ctx.moveTo(410,70);
ctx.lineTo(423,70);
ctx.lineTo(423,83);
ctx.lineTo(410,83);
ctx.lineTo(410,70);

ctx.moveTo(370,50);
ctx.lineTo(383,50);
ctx.lineTo(383,63);
ctx.lineTo(370,63);
ctx.lineTo(370,50);

ctx.moveTo(390,50);
ctx.lineTo(403,50);
ctx.lineTo(403,63);
ctx.lineTo(390,63);
ctx.lineTo(390,50);

ctx.moveTo(410,50);
ctx.lineTo(423,50);
ctx.lineTo(423,63);
ctx.lineTo(410,63);
ctx.lineTo(410,50);



ctx.stroke();
*/










