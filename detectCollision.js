export function detectCollision(ball, gameObject) {
    let ballBottom = ball.position.y + ball.size;
    let ballTop = ball.position.y;
    let ballX = ball.position.x;

    let gameObjectTop = gameObject.position.y;
    let gameObjectBottom = gameObject.position.y + gameObject.height;
    let gameObjectLeft = gameObject.position.x;
    let gameObjectRight = gameObject.position.x + gameObject.width;

    if (
        ballBottom >= gameObjectTop &&
        ballTop <= gameObjectBottom &&
        ballX <= gameObjectRight &&
        ballX + ball.size >= gameObjectLeft
    ) {
        return true;
    } else {
        return false;
    }
}
