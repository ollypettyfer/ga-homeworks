const canvas = document.querySelector("canvas");
const paddle1 = canvas.getContext("2d");
const paddle2 = canvas.getContext("2d");

let ball = canvas.getContext("2d");

paddle1.fillStyle = "limegreen";
paddle1.fillRect(20, 20, 50, 5);
paddle2.fillStyle = "limegreen";
paddle2.fillRect(380, 380, -50, 5);

ball.fillStyle = "blue";
ball.fillRect(30, 30, 5, 5);

// ? fillRect(x, y, width, height);
const moveBall = () => {
  let posX = 30;
  let posY = 30;
  let dY = 5;
  let dX = 5;
  
  setInterval(() => {
    if (posY > 372) {
      dY = -5;
      dX = -5;
    }
    if (posY < 26) {
      dY = 5;
      dX = 5;
    }
   
    ball.clearRect(posX, posY, 5, 5);
    posY += dY;
    posX += dX;
    ball.fillRect(posX, posY, 5, 5);
  }, 30);
};




document.addEventListener('keydown', event => {
    if (event.keyCode === 37) {
        alert('pressed left')
        //need to select paddle 1 and move it left??
        paddle1.moveTo(10, 10) //this is not working
    }
})

document.addEventListener('keydown', event => {
    if (event.keyCode === 39) {
        
        alert('pressed right')
        //need to select paddle 1 and move it right??
        paddle1.rotate(90) //not moving
    }
})
