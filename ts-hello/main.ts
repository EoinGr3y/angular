import { Point } from './point';
import { LikeComponent } from './like-component';

let count: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a'];

let arrowLog = (message: string) => {
    console.log(message);
}

enum Color { Red, Green, Blue }

let backgroundColor = Color.Blue;

let log = function(message: string) {
    console.log(message);
}

let point = new Point(1,2);
point._x = 3;
let optionalParametersPoint = new Point();
point.draw();

let likesComponent = new LikeComponent(5);
console.log('Number of likes = ' + likesComponent._numberOfLikes);
console.log('Is Selected = ' + likesComponent._isSelected);
likesComponent.toggleLike();
console.log('Number of likes = ' + likesComponent._numberOfLikes);
  console.log('Is Selected = ' + likesComponent._isSelected);
