import * as readlineSync from "readline-sync";
import { Mars } from "./class/Mars";
import { Rover } from "./class/Rover";
import { CommandExecutor } from "./class/CommandExecutor"; 

const mars = new Mars(10);
const rover = new Rover(0, 0, mars);
const commandExecutor = new CommandExecutor(rover); 

while (true) {
  console.log(rover.reportLocation());
  mars.display(rover);
  const command = readlineSync.question(
    "Entrer une commande (nord, sud, est, ouest, quitter): "
  );

  if (command === "quitter") {
    process.exit(0);
  }

  commandExecutor.executeCommand(command);
}

