// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
    this.count = this.sides.length
  }

  get countSides(){
    return this.array.length;
  }

  get perimeter() {
    let perimeterCal = 0;
    for(let i = 0; i < this.countSides; i++) {
      perimeterCal += this.sides[i];
    }
    return perimeterCal;
  }
}

class Triangle extends Polygon {

  get isValid() {
    let x = this.sides[0];
    let y = this.sides[1];
    let z = this.sides[2];

    return ((x+y) > z && (x+z) > y && (z+y) > x)? true : false
  }
}


class Square extends Polygon {

  get isValid() {
    let side1 = this.sides[0];
    let side2 = this.sides[1];
    let side3 = this.sides[2];
    let side4 = this.sides[3];
    return (side1 === side2 && side2 === side3 && side3 === side4)? true : false;
  }

  get area() {
    let areaCal = this.sides[0];
    return (areaCal * areaCal);
  }
}