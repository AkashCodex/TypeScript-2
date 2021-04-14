"use strict";
exports.__esModule = true;
//enums are just used to store bunch of numbers which remains constant throughout my code.
var myenum;
(function (myenum) {
    myenum[myenum["pi"] = 3.14] = "pi";
    myenum[myenum["e"] = 2.73] = "e";
    myenum["LOL"] = "Lough out Louds";
})(myenum || (myenum = {}));
var r = 10;
console.log("area of circle is " + myenum.pi * r * r);
console.log(myenum.LOL);
// myenum.pi=898900; give error
