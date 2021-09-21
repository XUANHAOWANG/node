class Particle{
    constructor(pos,node){
        this.pos
        this.acc=new p5.Vector(0,0)
        this.vel=new p5 Vector(0,0)
        this.node=node
    }
    run(){
        //velocity
        this.vel.add(this.acc)
        //max_speed
        this.vel.limit(max_speed) 
        this.pos.add(this.vel)
        //reset to 0

        this.acc.mult(0)
    }
    drawParticle(){
        noStroke()
        fill(255,0,0)
        ellipse(this.pos.x,this.pos.y,4)
        noFill()
    }
    arrive(target){
        this.acc.add(target,true)
    }
    steer(target,slowspeed){
        let steer;
        let desired=p5.Vector.SUB(TARGET.THIS.POS)
    }
}