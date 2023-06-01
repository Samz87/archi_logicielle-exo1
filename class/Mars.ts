import {Rover} from "./Rover";

export class Mars {
    size: number;
    grid: { hasObstacle: boolean }[][];

    constructor(size: number) {
        this.size = size;
        this.grid = new Array(size).fill(null).map(() =>
            new Array(size).fill(null).map(() =>
                ({ hasObstacle: Math.random() < 0.2 }) // 20% chance of obstacle
            )
        );
    }

    hasObstacle(x: number, y: number): boolean {
        return this.grid[y][x].hasObstacle;
    }

    display(rover: Rover): void {
        let horizontalBorder = '+';
        for (let i = 0; i < this.size; i++) {
            horizontalBorder += '--';
        }
        horizontalBorder += '+';

        console.log(horizontalBorder);
        for (let y = 0; y < this.size; y++) {
            let row = '| ';
            for (let x = 0; x < this.size; x++) {
                if (rover.x === x && rover.y === y) {
                    row += 'R ';
                } else if (this.grid[y][x].hasObstacle) {
                    row += 'O ';
                } else {
                    row += '. ';
                }
            }
            row += '|';
            console.log(row);
        }
        console.log(horizontalBorder);
    }
}
