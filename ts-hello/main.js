"use strict";
// Typescript Basics //
// tsc main.ts to transpile to javascript //
// node main.js to run after transpilation //
Object.defineProperty(exports, "__esModule", { value: true });
//basic types//
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
//enum//
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
; //automatically indexes value.
var backgroundColor = Color.Blue; //intelligently recognizes choices with enum.
//type assertions//
var message;
message = 'abc';
var endsWithC = message.endsWith('c'); //two ways you can tell typescript what Type Assertion to make.
var alternative = message.endsWith('c');
//functions//
var doLog = function (message) { return console.log(message); }; //arrow function
var drawPoint = function (point) {
    //...
};
var getDistance = function (pointA, pointB) {
    //...
};
drawPoint({
    a: 1,
    b: 2
});
// import { Point } from "./point";
//
// let point = new Point(1, 2);
// let x = point.x; // getter method allows user to get value of x
// point.x = 10; // setter method allows users to set value of x
// point.draw();
//access modifiers == keyword that we can apply to a member of a class to control its access from outside:
// public, private, protected (default all members are public)
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected); //backtick used to create template
