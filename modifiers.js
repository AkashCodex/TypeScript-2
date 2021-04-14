"use strict";
// by default Public
// public private protected
exports.__esModule = true;
var XYPlane = /** @class */ (function () {
    function XYPlane(x, y) {
        this.x = x;
        this.y = y;
    }
    XYPlane.prototype.draw = function () {
        console.log(this.x + "" + this.y);
    };
    return XYPlane;
}());
var obj = new XYPlane(2, 3);
obj.draw();
