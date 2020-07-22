import Paddle from "./paddle.js";
import Ball from "./ball.js";
import InputHandler from "./input.js";
import Brick from "./brick.js";
import { buildLevel, level1 } from "./levels.js";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        // let bricks = [];
        // for (let j = 0; j < 5; j++) {
        //     for (let i = 0; i < 10; i++) {
        //         bricks.push(
        //             new Brick(this, {
        //                 x: i * 80,
        //                 y: j * 30,
        //             })
        //         );
        //     }
        // }

        let bricks = buildLevel(this, level1);

        this.gameObjects = [this.ball, this.paddle, ...bricks];

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
