export{}

//beware of using type any let say an exapmle
//as no strict type checking

let person:{name:any,age:any};

person.name="youshi";
person.age=25;

console.log(person.name);
console.log(person.age);

person.name=25;
person.age="yuaosi";

console.log(person.name);
console.log(person.age);
