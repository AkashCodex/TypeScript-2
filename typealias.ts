export{}

//instead of specfying string | number.
let person=function(userid:string | number,name:string){
 console.log(`${userid}`);
}

//you can do type specification-user defined type specification

type StringNum=String | number;  

let person1=function(userid:StringNum,name:string){
 console.log(`${userid}  ${name}`)
}

//can also do with objects
type Object1={name:StringNum};

//instead of passing whole object you can pass this object.