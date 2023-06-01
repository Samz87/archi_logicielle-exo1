import { Rover } from '../class/Rover';
import { Mars } from '../class/Mars';

describe('Rover', () => {
    let mars: Mars;
    let rover: Rover;

    beforeEach(() => {
        mars = new Mars(10);
        rover = new Rover(0, 0, mars);
    });

    it('should be able to move north', () => {
        mars.hasObstacle = jest.fn(() => false);
        rover.moveNorth();
        expect(rover.y).toBe(9);
    });

    it('should be able to move south', () => {
        rover.y = 1;
        mars.hasObstacle = jest.fn(() => false);
        rover.moveSouth();
        expect(rover.y).toBe(2);
    });

    it('should be able to move east', () => {
        mars.hasObstacle = jest.fn(() => false);
        rover.moveEast();
        expect(rover.x).toBe(1);
    });

    it('should be able to move west', () => {
        mars.hasObstacle = jest.fn(() => false);
        rover.x = 1;
        rover.moveWest();
        expect(rover.x).toBe(0);
    });

    it('should be able to move north beyond the mars boundary', () => {
        mars.hasObstacle = jest.fn(() => false);
        rover.y = 0;
        rover.moveNorth();
        expect(rover.y).toBe(9);
    });

    it('should be able to move south beyond the mars boundary', () => {
        mars.hasObstacle = jest.fn(() => false);
        rover.y = 9;
        rover.moveSouth();
        expect(rover.y).toBe(0);
    });

    it('should be able to move east beyond the mars boundary', () => {
        mars.hasObstacle = jest.fn(() => false);
        rover.x = 9;
        rover.moveEast();
        expect(rover.x).toBe(0);
    });

    it('should be able to move west beyond the mars boundary', () => {
        mars.hasObstacle = jest.fn(() => false);
        rover.x = 0;
        rover.moveWest();
        expect(rover.x).toBe(9);
    });

    it('should report its location', () => {
        expect(rover.reportLocation()).toBe("Rover's current location is (0, 0)");
    });
    it('should stop when encountering an obstacle to the north', () => {
        mars.grid[9][0].hasObstacle = true;
        rover.moveNorth();
        expect(rover.y).toBe(0);
    });

    it('should stop when encountering an obstacle to the south', () => {
        mars.grid[1][0].hasObstacle = true;
        rover.moveSouth();
        expect(rover.x).toBe(0);
    });

    it('should stop when encountering an obstacle to the east', () => {
        mars.grid[0][1].hasObstacle = true;
        rover.moveEast();
        expect(rover.x).toBe(0);
    });

    it('should stop when encountering an obstacle to the west', () => {
        mars.grid[0][9].hasObstacle = true;
        rover.moveWest();
        expect(rover.x).toBe(0);
    });
});
