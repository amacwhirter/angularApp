// Typescript Basics //
// tsc main.ts to transpile to javascript //
// node main.js to run after transpilation //

//basic types//

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

//enum//

enum Color { Red = 0, Blue = 1, Green = 2 }; //automatically indexes value.
let backgroundColor = Color.Blue; //intelligently recognizes choices with enum.

//type assertions//

let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c'); //two ways you can tell typescript what Type Assertion to make.
let alternative = (message as string).endsWith('c');

//functions//

let doLog = (message) => console.log(message); //arrow function

//custom types - interfaces//

interface PointExample { //always use pascal naming convention (capital first) with interfaces
    a: number,
    b: number,
    draws: () => void
}
let drawPoint = (point: PointExample) => { //inline annotation
  //...
}

let getDistance = (pointA: PointExample, pointB: PointExample) => {
  //...
}

drawPoint({
  a: 1,
  b: 2
})

// import { Point } from "./point";
//
// let point = new Point(1, 2);
// let x = point.x; // getter method allows user to get value of x
// point.x = 10; // setter method allows users to set value of x
// point.draw();

//access modifiers == keyword that we can apply to a member of a class to control its access from outside:
// public, private, protected (default all members are public)

import { LikeComponent } from './like.component';

let component = new LikeComponent(10, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`); //backtick used to create template
