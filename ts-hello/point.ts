export class Point {

    constructor(private x?: number, private y?: number) {
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    get _x() {
        return this.x;
    }

    set _x(value) {
        this.x = value;
    }
}