// Your code here
class Polygon {
  constructor(side=[]){
    this.sides = sides
  }
  
  get countSides(){
    return this.sides.length
  }
  
  get perimeter(){
    return this.sides.map((side, i)=>{
      side++
    })
  }
}

class Triangle extends Polygon{
  get isValid() {
    let x = this.sides[0];
    let y = this.sides[1];
    let z = this.sides[2];

    return ((x+y) > z && (x+z) > y && (z+y) > x)? true : false
  }
}


