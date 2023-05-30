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
        rover.y = 10;
        rover.moveNorth();
        expect(rover.y).toBe(0);
    });

    it('should be able to move south beyond the mars boundary', () => {
        rover.y = 0;
        rover.moveSouth();
        expect(rover.y).toBe(10);
    });

    it('should be able to move east beyond the mars boundary', () => {
        rover.x = 10;
        rover.moveEast();
        expect(rover.x).toBe(0);
    });

    it('should be able to move west beyond the mars boundary', () => {
        rover.x = 0;
        rover.moveWest();
        expect(rover.x).toBe(10);
    });

    it('should report its location', () => {
        expect(rover.reportLocation()).toBe("Rover's current location is (0, 0)");
    });
});