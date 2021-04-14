export{}

//enums are just used to store bunch of numbers which remains constant throughout my code.
enum myenum{
 pi=3.14,
 e=2.73,
 LOL="Lough out Louds"   
}

let r:number=10;
console.log(`area of circle is ${myenum.pi*r*r}`);

console.log(myenum.LOL);

// myenum.pi=898900; give error