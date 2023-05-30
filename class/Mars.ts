export class Mars {
    size: number;
    grid: number[][];

    constructor(size: number) {
        this.size = size;
        this.grid = Array.from({length: size}, () => new Array(size).fill(0));
    }
}
