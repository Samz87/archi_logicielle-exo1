"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
class Mars {
    constructor(size) {
        this.size = size;
        this.grid = Array.from({ length: size }, () => new Array(size).fill(0));
    }
}
class Rover {
    constructor(x, y, mars) {
        this.x = x;
        this.y = y;
        this.mars = mars;
    }
    moveNorth() {
        if (this.y < this.mars.size - 1) {
            this.y += 1;
        }
    }
    moveSouth() {
        if (this.y > 0) {
            this.y -= 1;
        }
    }
    moveEast() {
        if (this.x < this.mars.size - 1) {
            this.x += 1;
        }
    }
    moveWest() {
        if (this.x > 0) {
            this.x -= 1;
        }
    }
    reportLocation() {
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
//# sourceMappingURL=main.js.map