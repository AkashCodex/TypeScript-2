// Getter and Setters Properties

class Paint{
  private x:number;
  private y:number;
  
   constructor(x?,y?){
    this.x=x;
    this.y=y;
   }
  
  //getter and setter
  get X(){
   return this.x;   
  }
  
  //setter
  set X(value){
   this.x=value;
  }
}

let obj=new Paint(3,4);

//getter
let x=obj.X;

//setter
obj.X=78;

