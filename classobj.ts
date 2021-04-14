//clases:-used to declare class variables+methods which are highly interlinked together
//class structure follows the principle of cohesion in programming

export{}

class A{
    x:any;
    constructor(x?){
        this.x=x;
    }

    r(){
       console.log(this.x); 
    }
}

//making objects

let obj=new A(4);

//let obj=new A(); gives error to make this work you can make argumetns optional in constructor
let obj1=new A();