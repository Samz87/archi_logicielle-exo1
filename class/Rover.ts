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
        if (this.y === this.mars.size ) this.y = 0;
        else if (this.y < this.mars.size - 1) this.y += 1;
    }

    moveSouth(): void {
        if (this.y === 0 ) this.y = this.mars.size ;
        else if (this.y > 0) {
            this.y -= 1;
        }
    }

    moveEast(): void {
        if (this.x === this.mars.size ) this.x = 0;
        else if (this.x < this.mars.size - 1) {
            this.x += 1;
        }
    }

    moveWest(): void {
        if (this.x === 0 ) this.x = this.mars.size ;
        else if (this.x > 0) {
            this.x -= 1;
        }
    }

    reportLocation(): string {
        return `Rover's current location is (${this.x}, ${this.y})`;
    }
}