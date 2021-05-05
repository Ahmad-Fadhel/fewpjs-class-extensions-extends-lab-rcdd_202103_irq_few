// Your code here
class Polygon {
  constructor(array) {
    this.array = array;
    this.count = this.array.length;
  }

  get countSides(){
    return this.array.length;
  }

  get perimeter() {
    let peri = 0;
    for(let i = 0; i < this.countSides; i++) {
      peri += this.array[i];
    }
    return peri;
  }
}

class Triangle extends Polygon {

  get isValid() {
    let x = this.array[0];
    let y = this.array[1];
    let z = this.array[2];

    return ((x+y) > z && (x+z) > y && (z+y) > x)? true : false
  }
}


class Square extends Polygon {

  get isValid() {
    let side1 = this.array[0];
    let side2 = this.array[1];
    let side3 = this.array[2];
    let side4 = this.array[3];
    return (side1 === side2 && side2 === side3 && side3 === side4)? true : false;
  }

  get area() {
    let areaCal = this.array[0];
    return (areaCal * areaCal);
  }
}