import Paddle from "./paddle.js";
import Ball from "./ball.js";
import InputHandler from "./input.js";
import Brick from "./brick.js";
import { buildLevel, level1, level2 } from "./levels.js";

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEXTLEVEL: 4,
};

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.gamestate = GAMESTATE.MENU;

        this.lives = 3;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        this.bricks = [];
        this.gameObjects = [];
        this.levels = [level1, level2];
        this.currentLevel = 0;

        new InputHandler(this.paddle, this);
    }

    start() {
        if (
            this.gamestate !== GAMESTATE.MENU &&
            this.gamestate !== GAMESTATE.NEXTLEVEL
        )
            return;
        this.bricks = buildLevel(this, this.levels[this.currentLevel]);
        this.gameObjects = [this.ball, this.paddle];
        this.gamestate = GAMESTATE.RUNNING;
    }

    update(dt) {
        // console.log(this.ball);
        if (this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;

        if (
            this.gamestate === GAMESTATE.PAUSED ||
            this.gamestate === GAMESTATE.MENU ||
            this.gamestate === GAMESTATE.GAMEOVER
        )
            return;

        [...this.gameObjects, ...this.bricks].forEach((obj) => obj.update(dt));
        // this.gameObjects = this.gameObjects.filter(
        //     (obj) =>
        //         obj.hit === false || obj.hit == "undefined" || obj.hit == null
        // );
        this.bricks = this.bricks.filter((brick) => !brick.hit);
        if (this.bricks.length === 0) {
            this.currentLevel++;
            this.gamestate = GAMESTATE.NEXTLEVEL;
            this.start();
            this.ball.resetBall();
        }
    }

    draw(context) {
        [...this.gameObjects, ...this.bricks].forEach((obj) =>
            obj.draw(context)
        );

        if (this.gamestate == GAMESTATE.PAUSED) {
            context.rect(0, 0, this.gameWidth, this.gameHeight);
            context.fillStyle = "rgba(0, 0, 0, 0.5)";
            context.fill();

            context.font = "30px arial";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }
        context.fillStyle = "black";

        if (this.gamestate === GAMESTATE.MENU) {
            context.rect(0, 0, this.gameWidth, this.gameHeight);
            context.fillStyle = "black";
            context.fill();

            context.font = "30px arial";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText(
                "Press SPACE To Start",
                this.gameWidth / 2,
                this.gameHeight / 2
            );
        }
        context.fillStyle = "black";

        if (this.gamestate === GAMESTATE.GAMEOVER) {
            context.rect(0, 0, this.gameWidth, this.gameHeight);
            context.fillStyle = "black";
            context.fill();

            context.font = "30px Arial";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText(
                "GAME OVER",
                this.gameWidth / 2,
                this.gameHeight / 2
            );
        }
        context.fillStyle = "black";
    }

    togglePause() {
        if (this.gamestate == GAMESTATE.RUNNING) {
            this.gamestate = GAMESTATE.PAUSED;
        } else {
            this.gamestate = GAMESTATE.RUNNING;
        }
    }

    showInfo() {
        console.log(this);
    }
}
