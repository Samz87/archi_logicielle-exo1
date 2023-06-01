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
}
