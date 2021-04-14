"use strict";
exports.__esModule = true;
//beware of using type any let say an exapmle
//as no strict type checking
var person;
person.name = "youshi";
person.age = 25;
console.log(person.name);
console.log(person.age);
person.name = 25;
person.age = "yuaosi";
console.log(person.name);
console.log(person.age);
