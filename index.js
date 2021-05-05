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