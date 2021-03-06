export default class InputHandler {
    constructor(paddle, game) {
        document.addEventListener("keydown", (e) => {
            switch (e.keyCode) {
                case 37:
                    // console.log("left");
                    paddle.moveLeft();
                    break;
                case 39:
                    paddle.moveRight();
                    // console.log("right");
                    break;
                case 38:
                    // paddle.stop();
                    // console.log("up");
                    break;
                case 40:
                    console.log("down");
                    break;
                case 27:
                    game.togglePause();
                    break;
                case 32:
                    game.start();
            }
        });

        document.addEventListener("keyup", (e) => {
            // console.log(e.keyCode);
            switch (e.keyCode) {
                case 37:
                    if (paddle.speed < 0) paddle.stop();
                    break;
                case 39:
                    if (paddle.speed > 0) paddle.stop();
                    break;
            }
        });
    }
}
