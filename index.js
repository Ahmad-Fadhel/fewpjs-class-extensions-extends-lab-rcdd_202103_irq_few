// Your code here
class Polygon {
  constructor(array) {
    this.array = array;
    this.count = this.array.length;
  }

  get getCount(){
    return this.array.length;
  }

  get perimeter() {
    let peri = 0;
    for(let i = 0; i < this.getCount; i++) {
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
    let x = this.array[0];
    let y = this.array[1];
    let z = this.array[2];
    let w = this.array[3];
    return (x === y && y === z && z === w)? true : false;
  }

  get area() {
    let x = this.array[0];
    return (x * x);
  }
}