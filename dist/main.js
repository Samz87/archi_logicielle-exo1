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
const Mars_1 = require("./class/Mars");
const Rover_1 = require("./class/Rover");
const CommandExecutor_1 = require("./class/CommandExecutor");
const mars = new Mars_1.Mars(10);
const rover = new Rover_1.Rover(0, 0, mars);
const commandExecutor = new CommandExecutor_1.CommandExecutor(rover);
while (true) {
    console.log(rover.reportLocation());
    mars.display(rover);
    const command = readlineSync.question("Enter command (north, south, east, west, quit): ");
    if (command === "quit") {
        process.exit(0);
    }
    commandExecutor.executeCommand(command);
}
//# sourceMappingURL=main.js.map