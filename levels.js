import Brick from "./brick.js";

export function buildLevel(game, level) {
    let bricks = [];

    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if (brick !== 0) {
                bricks.push(
                    new Brick(game, {
                        x: brickIndex * 80,
                        y: 50 + rowIndex * 30,
                    })
                );
            }
        });
    });

    return bricks;
}

export const level1 = [
    [1, 0, 1, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
    [1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
    [1, 0, 1, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 0],
];

export const level2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
];
