function setup() {
  createCanvas (800, 600);
}
const GraphSize = 40;
function draw() {
  //initization information
  background(100);    // Set background color           https://p5js.org/reference/#/p5/background
  fill(255);          // Set color used to fill shapes  https://p5js.org/reference/#/p5/fill
  stroke(51);         // Enable drawing shape outlines https://p5js.org/reference/#/p5/noStroke
  strokeWeight(4);
  
  //grid information
  let row = height/GraphSize;
  let col = width/GraphSize;
  
  //graph creation
  for (let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++){
      //coordinates
      let x = j * GraphSize;
      let y = i * GraphSize;
      let dis = dist(x,y,mouseX,mouseY);
      let size = map(dis, 0, width, 0, GraphSize);
      rect (x, y, size, size);
    }
  }
}


 

//Where the mouse is, squares are small and spaced out
//further from the mouse the square are bigger and cramped
//this effect will follow the mouse around
//square grid covers the entire screen