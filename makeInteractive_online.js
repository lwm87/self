
var WIDTH = 800;
var HEIGHT = 600;

let rectW = 50;
let rectH = 50;
let rectXpos = WIDTH/2-rectW/2 ;
let rectYpos = HEIGHT/2-rectH/2;

let distMouse = 25; let distMouse2 = 50; let distMouse3 = 15;
let b;
let blocks = [];
let cols; let rows; let size = 25; let offset = 10;


function setup() {
  createCanvas(WIDTH, HEIGHT);
  rectMode(CENTER);
  angleMode(DEGREES);
  
  cols = width/size;
  rows = height/size;
  
  for(let i=0; i < cols; i++){
    blocks[i] = [];
    for(let j=0; j < rows; j++){
      blocks[i][j] = new Block(size/2+i*size,size/2+j*size);
    }
  }
  //b = new Block(width/2,height/2);
}


function draw() {
  background(50);
  
  for(let i=0; i < cols; i++){
    for(let j=0; j < rows; j++){
      blocks[i][j].move();
      blocks[i][j].display();
    }
  }
  
  //fill(255,0,0);
  
  //print the mouse position and pmouse for detecting if the mouse is moving by comparing the two vaulues 
  //print(pmouseX, mouseX, pmouseY, mouseY);
  
}//end of draw
