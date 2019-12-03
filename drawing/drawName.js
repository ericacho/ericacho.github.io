function drawName(x,y,s) {
    ctx.save();
    // ctx.translate(x,y,s);
    ctx.scale(s, s);
    ctx.translate(x*UNIT,y*UNIT);
    //e
    //ctx. fillRect(x,y,w,h)
    ctx.fillStyle = "black"
    ctx.fillRect(0,UNIT,UNIT,UNIT);
    ctx.fillRect(0,2*UNIT,UNIT,UNIT);
    ctx.fillRect(0,3*UNIT,UNIT,UNIT);
    ctx.fillRect(UNIT,4*UNIT,UNIT,UNIT);
    ctx.fillRect(2*UNIT,4*UNIT,UNIT,UNIT);
    ctx.fillRect(3*UNIT,4*UNIT,UNIT,UNIT);
    ctx.fillRect(UNIT,0,UNIT,UNIT);
    ctx.fillRect(2*UNIT,0,UNIT,UNIT);
    ctx.fillRect(3*UNIT,UNIT,UNIT,UNIT);
    ctx.fillRect(3*UNIT,2*UNIT,UNIT,UNIT);
    ctx.fillRect(2*UNIT,2*UNIT,UNIT,UNIT);
    ctx.fillRect(UNIT,2*UNIT,UNIT,UNIT);
    //r 
    ctx.fillRect(5*UNIT,0,UNIT, 5*UNIT);
    ctx.fillRect(6*UNIT,UNIT, UNIT,UNIT);
    ctx.fillRect(7*UNIT,0,2*UNIT,UNIT);
    //i
    ctx.fillRect(10*UNIT,0,UNIT,UNIT);
    ctx.fillRect(10*UNIT, 2*UNIT, UNIT,3*UNIT);

    //c
    ctx.fillRect(13*UNIT, UNIT, UNIT,3*UNIT);
    ctx.fillRect(14*UNIT,0,2*UNIT,UNIT);
    ctx.fillRect(14*UNIT, 4*UNIT, 2*UNIT,UNIT);
    ctx.fillRect(16*UNIT, UNIT, UNIT,UNIT);
    ctx.fillRect(16*UNIT, 3*UNIT, UNIT, UNIT);
    

    //a
    ctx.fillRect(19*UNIT, 3*UNIT, UNIT, UNIT);
    ctx.fillRect(20*UNIT,0,2*UNIT, UNIT);
    ctx.fillRect(20*UNIT, 2*UNIT, 2*UNIT, UNIT);
    ctx.fillRect(20*UNIT, 4*UNIT, 2*UNIT, UNIT);
    ctx.fillRect(22*UNIT, UNIT, UNIT, 4*UNIT);

    //C
    ctx.fillRect(31*UNIT, UNIT, UNIT,3*UNIT);
    ctx.fillRect(32*UNIT,0,2*UNIT,UNIT);
    ctx.fillRect(32*UNIT, 4*UNIT, 2*UNIT,UNIT);
    ctx.fillRect(34*UNIT, UNIT, UNIT,UNIT);
    ctx.fillRect(34*UNIT, 3*UNIT, UNIT, UNIT);

    //H
    ctx.fillRect(36*UNIT,0, UNIT, 5*UNIT);
    ctx.fillRect(37*UNIT, 2*UNIT, 2*UNIT, UNIT);
    ctx.fillRect(39*UNIT,0, UNIT, 5*UNIT);

    //O
    ctx.fillRect(41*UNIT, UNIT, UNIT,3*UNIT);
    ctx.fillRect(42*UNIT,0,2*UNIT,UNIT);
    ctx.fillRect(42*UNIT, 4*UNIT, 2*UNIT,UNIT);
    ctx.fillRect(44*UNIT, UNIT, UNIT, 3*UNIT);
    ctx.restore();
}