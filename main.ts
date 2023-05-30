import * as readlineSync from 'readline-sync';

class Mars {
    size: number;
    grid: number[][];

    constructor(size: number) {
        this.size = size;
        this.grid = Array.from({length: size}, () => new Array(size).fill(0));
    }
}

class Rover {
    x: number;
    y: number;
    mars: Mars;

    constructor(x: number, y: number, mars: Mars) {
        this.x = x;
        this.y = y;
        this.mars = mars;
    }

    moveNorth(): void {
        if (this.y < this.mars.size - 1) {
            this.y += 1;
        }
    }

    moveSouth(): void {
        if (this.y > 0) {
            this.y -= 1;
        }
    }

    moveEast(): void {
        if (this.x < this.mars.size - 1) {
            this.x += 1;
        }
    }

    moveWest(): void {
        if (this.x > 0) {
            this.x -= 1;
        }
    }

    reportLocation(): string {
        return `Rover's current location is (${this.x}, ${this.y})`;
    }
}

const mars = new Mars(10);
const rover = new Rover(0, 0, mars);

while (true) {
    console.log(rover.reportLocation());
    const command = readlineSync.question('Enter command (north, south, east, west, quit): ');

    switch (command) {
        case 'north':
            rover.moveNorth();
            break;
        case 'south':
            rover.moveSouth();
            break;
        case 'east':
            rover.moveEast();
            break;
        case 'west':
            rover.moveWest();
            break;
        case 'quit':
            process.exit(0);
        default:
            console.log('Invalid command');
    }
}
