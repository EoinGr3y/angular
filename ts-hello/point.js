"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
exports.Point = Point;
