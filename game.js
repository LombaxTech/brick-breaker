import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";

let canvas = document.getElementById("gamescreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
new InputHandler(paddle);

let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

// context.fillStyle = "#2c2c2c";
// context.fillRect(20, 20, 100, 100);

// context.fillStyle = "green";
// context.fillRect(500, 100, 20, 20);

// context.clearRect(0, 0, canvas.width, canvas.height);

// console.log(paddle);
paddle.draw(context);

let lastTime = 0;

function gameLoop(timestamp) {
    let dt = timestamp - lastTime;
    lastTime = timestamp;

    context.clearRect(0, 0, canvas.width, canvas.height);
    paddle.update(dt);
    paddle.draw(context);

    ball.draw(context);
    ball.update(dt);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
