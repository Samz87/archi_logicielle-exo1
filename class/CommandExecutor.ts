import { Rover } from "./Rover";

export class CommandExecutor {
  rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  executeCommand(command: string): void {
    switch (command) {
      case "nord":
        this.rover.moveNorth();
        break;
      case "sud":
        this.rover.moveSouth();
        break;
      case "est":
        this.rover.moveEast();
        break;
      case "ouest":
        this.rover.moveWest();
        break;
      default:
        console.log(`Commande invalide: ${command}. On ne fait rien.`);
        break;
    }
  }
}

