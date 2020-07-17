import Paddle from "./paddle.js";

let canvas = document.getElementById("gamescreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// context.fillStyle = "#2c2c2c";
// context.fillRect(20, 20, 100, 100);

// context.fillStyle = "green";
// context.fillRect(500, 100, 20, 20);

// context.clearRect(0, 0, canvas.width, canvas.height);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
// console.log("hello");

console.log(paddle);
paddle.draw(context);
