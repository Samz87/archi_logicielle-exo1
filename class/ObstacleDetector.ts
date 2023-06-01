import { Mars } from "./Mars";

export class ObstacleDetector {
  mars: Mars;

  constructor(mars: Mars) {
    this.mars = mars;
  }

  hasObstacle(x: number, y: number): boolean {
    return this.mars.grid[y][x].hasObstacle;
  }
}

