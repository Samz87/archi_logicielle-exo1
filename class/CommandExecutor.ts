import { Rover } from "./Rover";

export class CommandExecutor {
  rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  executeCommand(command: string): void {
    switch (command) {
      case "north":
        this.rover.moveNorth();
        break;
      case "south":
        this.rover.moveSouth();
        break;
      case "east":
        this.rover.moveEast();
        break;
      case "west":
        this.rover.moveWest();
        break;
      default:
        console.log(`Invalid command: ${command}. Skipping.`);
        break;
    }
  }
}

