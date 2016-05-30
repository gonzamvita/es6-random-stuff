// class declaration
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// hoisting: function declarations are hoisted, classes not.
var p = new Polygon(); // this will cause a ReferenceError

class Polygon {} // ...

// class expression declarations
var Polygon = class { // unnamed
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

var Polygon2 = class Polygon { // named
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// classes body

class Polygon2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}
