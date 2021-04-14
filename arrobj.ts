export{}

//Ts is strict typed with it's arrays and objects


let names=["a","b","c"];

names.push("d");
//names.push(2);  error as during declartion the array is string typed

let mixedtype=["sa",1,true];

mixedtype.push(3.4444);

//defining typed of arrays

let listnew:string[]=[];

listnew[0]="jsjdk";
//listnew[1]=90;  error



//Objects
//Objects are also typed checked 

let obj1={
    name:"John"
}

obj1.name="rahul";
//obj1.name=90;  gives error

obj1={
  name:"ui",
  //age:34 error       
}

// object structured is also typed checked.