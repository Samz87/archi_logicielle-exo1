import * as readlineSync from 'readline-sync';
import { Mars } from "./class/Mars";
import { Rover } from "./class/Rover";

const mars = new Mars(10);
const rover = new Rover(0, 0, mars);

while (true) {
    console.log(rover.reportLocation());
    const command = readlineSync.question('Enter command (north, south, east, west, quit): ');

    if (command === 'quit') {
        process.exit(0);
    }

    rover.executeCommand(command);
}
