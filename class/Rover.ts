import { Mars } from "./Mars";
import { ObstacleDetector } from "./ObstacleDetector";

export class Rover {
  x: number;
  y: number;
  mars: Mars;
  obstacleDetector: ObstacleDetector;

  constructor(x: number, y: number, mars: Mars) {
    this.x = x;
    this.y = y;
    this.mars = mars;
    this.obstacleDetector = new ObstacleDetector(mars);
  }

  moveNorth(): void {
    const newY = this.y === 0 ? this.mars.size - 1 : this.y - 1;
    if (!this.obstacleDetector.hasObstacle(this.x, newY)) {
      this.y = newY;
    } else {
      console.log("Obstacle détecté, on s'arrête.");
    }
  }

  moveSouth(): void {
    const newY = this.y === this.mars.size - 1 ? 0 : this.y + 1;
    if (!this.obstacleDetector.hasObstacle(this.x, newY)) {
      this.y = newY;
    } else {
      console.log("Obstacle détecté, on s'arrête.");
    }
  }

  moveEast(): void {
    const newX = this.x === this.mars.size - 1 ? 0 : this.x + 1;
    if (!this.obstacleDetector.hasObstacle(newX, this.y)) {
      this.x = newX;
    } else {
      console.log("Obstacle détecté, on s'arrête.");
    }
  }

  moveWest(): void {
    const newX = this.x === 0 ? this.mars.size - 1 : this.x - 1;
    if (!this.obstacleDetector.hasObstacle(newX, this.y)) {
      this.x = newX;
    } else {
      console.log("Obstacle détecté, on s'arrête.");
    }
  }

  reportLocation(): string {
    return `La position actuelle du Rover est : (${this.x}, ${this.y})`;
  }
}




