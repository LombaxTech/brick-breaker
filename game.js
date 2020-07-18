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
        new InputHandler(this.paddle);
    }

    update(dt) {
        this.paddle.update(dt);
        this.ball.update(dt);
    }

    draw(context) {
        this.paddle.draw(context);
        this.ball.draw(context);
    }
}
