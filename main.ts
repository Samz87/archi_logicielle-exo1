import * as readlineSync from 'readline-sync';
import { Mars } from "./class/Mars";
import { Rover } from "./class/Rover";

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
