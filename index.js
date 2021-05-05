// Your code here
class Polygon {
  constructor(side=[]){
    this.sides = sides
  }
  
  get countSides(){
    return this.sides.length
  }
  
 get perimeters() {
    let perimeter = 0;
    for(let i = 0; i < this.getCount; i++) {
      perimeter += this.sides[i];
    }
    return perimeter;
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

class Square extends Polygon {

  get isValid() {
    let x = this.sides[0];
    let y = this.sides[1];
    let z = this.sides[2];
    let w = this.sides[3];
    return (x === y && y === z && z === w)? true : false;
  }

  get area() {
    let x = this.sides[0];
    return (x * x);
  }
}



