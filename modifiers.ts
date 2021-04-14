// by default Public
// public private protected

export{}

class XYPlane{

   private x:number;
   public y:number;

    constructor(x,y){
      this.x=x;
      this.y=y;  
    }
    draw(){
     console.log(this.x+""+this.y);
    }
}

let obj=new XYPlane(2,3);
obj.draw();

