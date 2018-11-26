"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LikeComponent {
    constructor(numberOfLikes) {
        this.numberOfLikes = numberOfLikes;
        this.isSelected = false;
    }
    toggleLike() {
        this.isSelected = !this.isSelected;
        this.numberOfLikes += (this.isSelected) ? 1 : -1;
    }
    get _numberOfLikes() {
        return this.numberOfLikes;
    }
    get _isSelected() {
        return this.isSelected;
    }
}
exports.LikeComponent = LikeComponent;
