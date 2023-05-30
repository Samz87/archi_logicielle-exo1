import { Mars } from '../class/Mars';

describe('Mars', () => {
    let mars: Mars;

    beforeEach(() => {
        mars = new Mars(10);
    });

    it('should initialize with a specific size', () => {
        expect(mars.size).toBe(10);
    });

    it('should initialize the grid based on the given size', () => {
        expect(mars.grid.length).toBe(10);
        for (let i = 0; i < mars.size; i++) {
            expect(mars.grid[i].length).toBe(10);
        }
    });
});
