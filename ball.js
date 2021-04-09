class ball {
    constructor(x,y,r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = this.radius;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        fill("aqua");
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}