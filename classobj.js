"use strict";
//clases:-used to declare class variables+methods which are highly interlinked together
//class structure follows the principle of cohesion in programming
exports.__esModule = true;
var A = /** @class */ (function () {
    function A(x) {
        this.x = x;
    }
    A.prototype.r = function () {
        console.log(this.x);
    };
    return A;
}());
//making objects
var obj = new A(4);
//let obj=new A(); gives error to make this work you can make argumetns optional in constructor
var obj1 = new A();
