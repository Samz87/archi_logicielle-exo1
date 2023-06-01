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
        rover.moveNorth();
        expect(rover.y).toBe(1);
    });

    it('should be able to move south', () => {
        rover.y = 1;
        rover.moveSouth();
        expect(rover.y).toBe(0);
    });

    it('should be able to move east', () => {
        rover.moveEast();
        expect(rover.x).toBe(1);
    });

    it('should be able to move west', () => {
        rover.x = 1;
        rover.moveWest();
        expect(rover.x).toBe(0);
    });

    it('should be able to move north beyond the mars boundary', () => {
        rover.y = 9;
        rover.moveNorth();
        expect(rover.y).toBe(0);
    });

    it('should be able to move south beyond the mars boundary', () => {
        rover.y = 0;
        rover.moveSouth();
        expect(rover.y).toBe(9);
    });

    it('should be able to move east beyond the mars boundary', () => {
        rover.x = 9;
        rover.moveEast();
        expect(rover.x).toBe(0);
    });

    it('should be able to move west beyond the mars boundary', () => {
        rover.x = 0;
        rover.moveWest();
        expect(rover.x).toBe(9);
    });

    it('should report its location', () => {
        expect(rover.reportLocation()).toBe("Rover's current location is (0, 0)");
    });
    it('should stop when encountering an obstacle to the north', () => {
        mars.grid[1][0].hasObstacle = true;
        rover.moveNorth();
        expect(rover.y).toBe(0);
    });

    it('should stop when encountering an obstacle to the south', () => {
        rover.y = 1;
        mars.grid[0][0].hasObstacle = true;
        rover.moveSouth();
        expect(rover.y).toBe(1);
    });

    it('should stop when encountering an obstacle to the east', () => {
        mars.grid[0][1].hasObstacle = true;
        rover.moveEast();
        expect(rover.x).toBe(0);
    });

    it('should stop when encountering an obstacle to the west', () => {
        rover.x = 1;
        mars.grid[0][0].hasObstacle = true;
        rover.moveWest();
        expect(rover.x).toBe(1);
    });
});
