function drawMickey( ){
    // face colour: #F5AA41 outline of face: #AB2622 main colour of pants: #ED3833 shadow of pants (dark yellow): #F5AA41 shadow of white: #AAAAAA
    ctx.fillStyle="black";
        //ctx. fillRect(x,y,w,h)
    ctx.fillRect(0,6*UNIT,UNIT, 5*UNIT);
    ctx.fillRect(UNIT, 5*UNIT, UNIT, 7*UNIT);
    ctx.fillRect(2*UNIT, 5*UNIT, UNIT, 7*UNIT);
    ctx.fillRect(3*UNIT, 5*UNIT, UNIT, 7*UNIT);
    ctx.fillRect(4*UNIT, 6*UNIT, UNIT, 5*UNIT);
}