import Paddle from "./paddle.js";
import Ball from "./ball.js";
import InputHandler from "./input.js";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        this.gameObjects = [this.ball, this.paddle];

        new InputHandler(this.paddle);
    }

    update(dt) {
        this.gameObjects.forEach((obj) => obj.update(dt));
    }

    draw(context) {
        this.gameObjects.forEach((obj) => obj.draw(context));
    }

    showInfo() {
        console.log(this);
    }
}
