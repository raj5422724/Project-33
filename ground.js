class ground {
    constructor() {
        this.body = Bodies.rectangle(240,790,480,10,{'isStatic': true});
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,480,10);
    }
}