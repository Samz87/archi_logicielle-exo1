import { Mars } from "./Mars";

export class Rover {
    x: number;
    y: number;
    mars: Mars;

    constructor(x: number, y: number, mars: Mars) {
        this.x = x;
        this.y = y;
        this.mars = mars;
    }

    moveNorth(): void {
        const newY = this.y === (this.mars.size - 1) ? 0 : this.y + 1;
        if (!this.mars.hasObstacle(this.x, newY)) {
            this.y = newY;
        } else {
            console.log("Obstacle detected. Stopping movement.");
        }
    }




    moveSouth(): void {
        const newY = this.y === 0 ? this.mars.size - 1 : this.y - 1;
        if (!this.mars.hasObstacle(this.x, newY)) {
            this.y = newY;
        } else {
            console.log('Obstacle detected. Stopping movement.');
        }
    }

    moveEast(): void {
        const newX = this.x === this.mars.size - 1 ? 0 : this.x + 1;
        if (!this.mars.hasObstacle(newX, this.y)) {
            this.x = newX;
        } else {
            console.log("Obstacle detected. Stopping movement.");
        }
    }

    moveWest(): void {
        const newX = this.x === 0 ? this.mars.size - 1 : this.x - 1;
        if (!this.mars.hasObstacle(newX, this.y)) {
            this.x = newX;
        } else {
            console.log("Obstacle detected. Stopping movement.");
        }
    }


    reportLocation(): string {
        return `Rover's current location is (${this.x}, ${this.y})`;
    }
    executeCommand(command: string): void {
        switch (command) {
            case 'north':
                this.moveNorth();
                break;
            case 'south':
                this.moveSouth();
                break;
            case 'east':
                this.moveEast();
                break;
            case 'west':
                this.moveWest();
                break;
            default:
                console.log(`Invalid command: ${command}. Skipping.`);
                break;
        }
    }
}

