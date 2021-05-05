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
  get isValid(){
    return this.side[0]+this.side[1] > this.side[2]
  }
}


