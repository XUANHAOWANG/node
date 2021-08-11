let spacing=40;
let x=spacing/2;
let y=spacing/2;
let radius=30;//cycle size

function setup(){//set canvas
    createCanvas(1320,640);
    background(51)
}


function draw(){
    let d=random(1,8)
    let a1=random(15, 200);
    let a2=random(15, 200);
    
    let b1=random(15, 200);
    let b2=random(15, 200);
    
    let c1=random(15, 200);
    let c2=random(15, 200);
if(random(1)<0.6){
    stroke(a1, b1, c1)//因随机数生成不同颜色
    strokeWeight(d)//线条宽度
    fill(a2,b2,c2)
    ellipse(x,y,radius,radius)
}
x+=spacing
if(x>=width){
    x=spacing/2
    y+=spacing
}
if(y>=height){
    noLoop()
}

}
