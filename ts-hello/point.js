"use strict";
//custom types - classes, objects, constructors, access modifiers//
Object.defineProperty(exports, "__esModule", { value: true });
//Modules//
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        //private (access modifier) added makes this parameter unaccessable, cannot change it.
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ',Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0.');
                this.x = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
