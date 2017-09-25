//custom types - classes, objects, constructors, access modifiers//

//Modules//

export class Point {

    constructor(private _x?: number, private _y?: number) { //? after parameter means optional
      //private (access modifier) added makes this parameter unaccessable, cannot change it.
    }

    draw() {
      console.log('X: ' + this._x + ',Y: ' + this._y)
    }

    get x() {
      return this.x;
    }

    set x(value) {
      if (value < 0) {
        throw new Error('value cannot be less than 0.');

      this.x = value;
      }
    }
}
