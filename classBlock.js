
class Block{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.color = 125;
  }
  
  display(){
    push();
    noFill();
    stroke(this.color);
    translate(this.x,this.y)
    rotate(this.angle);
    
    if(this.angle > 0 && this.angle < 35){
      this.drawCircle();
      //this.drawRect();
      //this.drawX();
    } else if(this.angle >35 && this.angle < 70){
      this.drawRect();
    }else if(this.angle >70 && this.angle < 90){
      //this.drawRect();
      this.drawX2();
    }else{
      this.drawX();
      //this.drawRect();
    }
    pop();
  }
  
  move(){
    let distance;
    
    //if mouse is moving, chech dfistance of mouse and center of square
    if(pmouseX - mouseX != 0 || pmouseY - mouseY != 0){
      distance = dist(mouseX, mouseY, this.x,this.y);
      //print(distance);
      if(distance < distMouse){
        print("3");
        this.angle++;
        //this.color = 240;
        noFill();
        this.color = color(220, 0, 0);
        stroke(this.color);
        //fill(0,140,0);
        /*
        if(distance < distMouse2){
          print("2");
          this.angle+=5;
          fill(0,200,0);
          if(distance < distMouse3){
            print("1");
            this.angle+=15;
            fill(0,255,0);
            //rect(0, 0, rectW, rectH);
          }
        } */
      } 
      }//enf if check for mouse movement
      
      //if squares are moving keep moving until angle is cero
      if(this.angle > 0 && this.angle < 180){//was max at 90 but i like it more at 180
        this.angle++;
        if(this.color > 125){
          this.color -= 2;
        }
        
      } else{
        this.angle = 0;
        this.color = 125;
      }
  }//end of move()
  
  drawRect(){
    //fill(180,0,0);
    //stroke(this.color);
    noFill();
    this.color = color(190, 0, 0);
    stroke(this.color);
    rect(0, 0, size-offset, size-offset); 
  }
  
  drawCircle(){
    //fill(240,0,0);
    circle(0, 0, size-offset, size-offset); 
  }
  
  drawX(){
    let margin = -size/2;
    line(margin+offset/2, margin+offset/2, margin+size-offset/2, margin+size-offset/2);
    line(margin+size-offset/2, margin+offset/2, margin+offset/2, margin+size-offset/2);
  }
  
  drawX2(){
    noFill();
    this.color = color(170, 0, 0);
    stroke(this.color);
    let margin = -size/2;
    line(margin+offset/2, margin+offset/2, margin+size-offset/2, margin+size-offset/2);
    line(margin+size-offset/2, margin+offset/2, margin+offset/2, margin+size-offset/2);
  }
  
  
  
}//end of classs
