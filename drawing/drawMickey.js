function drawMickey1(x,y) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    // face colour: #F5AA41 outline of face: #AB2622 main colour of pants: #ED3833 shadow of shoes (dark yellow): #F5AA41 main colour of shoes: #FEF851 mouth: #ED3833
    ctx.fillStyle = "black";
    //ctx. fillRect(x,y,w,h)
    drawMickey1LeftEar();
    drawMickey1BackHead();
    drawMickey1FaceDetails();
    drawMickey1FaceOutline();
    drawMickey1FaceColour();
    drawMickey1Body();
    drawMickey1Clothes();
    drawMickey1Shoes();
    ctx.restore();
}

function drawMickey2() {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 18 * UNIT, UNIT, UNIT);
    ctx.fillRect(UNIT, 6 * UNIT, 6 * UNIT, 5 * UNIT);
    ctx.fillRect(2 * UNIT, 5 * UNIT, 3 * UNIT, UNIT);
    ctx.fillRect(2 * UNIT, 11 * UNIT, 3 * UNIT,  UNIT);
    ctx.fillRect(UNIT, 6 * UNIT, 6 * UNIT, 5 * UNIT);
    ctx.fillRect(6 * UNIT, 0, 4 * UNIT, 8 * UNIT);
    ctx.fillRect(5 * UNIT, UNIT, UNIT, 4 * UNIT);
    ctx.fillRect(10 * UNIT, UNIT, UNIT, 8 * UNIT);
    ctx.fillRect(7 * UNIT, 8 * UNIT, UNIT, UNIT);
    ctx.fillRect(11 * UNIT, 3 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(11 * UNIT, 4 * UNIT,  UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 4 * UNIT, 2 * UNIT,   UNIT);
    ctx.fillRect(14 * UNIT, 5 * UNIT,  UNIT,  UNIT);
    ctx.fillRect(13 * UNIT, 6 * UNIT, UNIT, 3 * UNIT);
    ctx.fillRect(15 * UNIT, 6 * UNIT,  UNIT, 2 * UNIT);
    ctx.fillRect(17 * UNIT, 7 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(18 * UNIT, 6 * UNIT,  UNIT,  UNIT);
    ctx.fillRect(10 * UNIT, 10 * UNIT, UNIT, 3 * UNIT);
    ctx.fillRect(11 * UNIT, 11 * UNIT, UNIT,  UNIT);
    ctx.fillRect(12 * UNIT, 12 * UNIT, 2 * UNIT,  UNIT);
    ctx.fillRect(11 * UNIT, 13 * UNIT, 2 * UNIT,  UNIT);
    ctx.fillRect(7 * UNIT, 14 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 15 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(5 * UNIT, 16 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(6 * UNIT, 19 * UNIT, UNIT,  UNIT);
    ctx.fillRect(7 * UNIT, 8 * UNIT, UNIT, UNIT);


}







function drawMickey1LeftEar(){
    ctx.fillStyle = "black"
    ctx.fillRect(0, 6 * UNIT, UNIT, 5 * UNIT);
    ctx.fillRect(UNIT, 5 * UNIT, UNIT, 7 * UNIT);
    ctx.fillRect(2 * UNIT, 5 * UNIT, UNIT, 7 * UNIT);
    ctx.fillRect(3 * UNIT, 5 * UNIT, UNIT, 7 * UNIT);
    ctx.fillRect(4 * UNIT, 6 * UNIT, UNIT, 5 * UNIT);
}

function drawMickey1BackHead(){
    //right ear and black part of top of head
    ctx.fillRect(4 * UNIT, UNIT, UNIT, 4 * UNIT);
    ctx.fillRect(5 * UNIT, 0, UNIT, 11 * UNIT);
    ctx.fillRect(7 * UNIT, 0, 2 * UNIT, 8 * UNIT);
    ctx.fillRect(6 * UNIT, 0, UNIT, 9 * UNIT);
    ctx.fillRect(9 * UNIT, UNIT, UNIT, 8 * UNIT);
    ctx.fillRect(10 * UNIT, 3 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 3 * UNIT, UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 4 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 5 * UNIT, UNIT, UNIT);
}

function drawMickey1FaceDetails(){
    //details on face with black
    ctx.fillRect(12 * UNIT, 6 * UNIT, UNIT, 3 * UNIT);
    ctx.fillRect(14 * UNIT, 6 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(16 * UNIT, 7 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(17 * UNIT, 6 * UNIT, UNIT, UNIT);
    ctx.fillRect(9 * UNIT, 10 * UNIT, UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 11 * UNIT, UNIT, UNIT);
    ctx.fillRect(10 * UNIT, 13 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(11 * UNIT, 12 * UNIT, 2 * UNIT, UNIT);
}

function drawMickey1FaceColour(){
    //face with colour
    ctx.fillStyle = "#F5AA41";
    ctx.fillRect(6 * UNIT, 9 * UNIT, UNIT, 3 * UNIT);
    ctx.fillRect(7 * UNIT, 8 * UNIT, UNIT, 5 * UNIT);
    ctx.fillRect(8 * UNIT, 8 * UNIT, UNIT, UNIT);
    ctx.fillRect(8 * UNIT, 10 * UNIT, UNIT, 3 * UNIT);
    ctx.fillRect(9 * UNIT, 9 * UNIT, UNIT, UNIT);
    ctx.fillRect(10 * UNIT, 5 * UNIT, 2 * UNIT, 6 * UNIT);
    ctx.fillRect(11 * UNIT, 4 * UNIT, UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 5 * UNIT, UNIT, UNIT);
    ctx.fillRect(14 * UNIT, 5 * UNIT, UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 6 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 10 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(13 * UNIT, 9 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(14 * UNIT, 8 * UNIT, UNIT, UNIT);
    ctx.fillRect(9 * UNIT, 13 * UNIT, UNIT, UNIT);
    ctx.fillRect(10 * UNIT, 14 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 13 * UNIT, UNIT, UNIT);
}

function drawMickey1FaceOutline(){
    //outline of face
    ctx.fillStyle = "#AB2622"
    ctx.fillRect(5 * UNIT, 11 * UNIT, UNIT, UNIT);
    ctx.fillRect(6 * UNIT, 12 * UNIT, UNIT, UNIT);
    ctx.fillRect(7 * UNIT, 13 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(9 * UNIT, 14 * UNIT, UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 14 * UNIT, UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 12 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(14 * UNIT, 12 * UNIT, UNIT, UNIT);
    ctx.fillRect(15 * UNIT, 11 * UNIT, UNIT, UNIT);
    ctx.fillRect(16 * UNIT, 9 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(15 * UNIT, 8 * UNIT, UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 8 * UNIT, UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 9 * UNIT, UNIT, UNIT);
    ctx.fillRect(8 * UNIT, 9 * UNIT, UNIT, UNIT);
}

function drawMickey1Body(){
    //body
    ctx.fillStyle = "black"
    ctx.fillRect(6 * UNIT, 13 * UNIT, UNIT, UNIT);
    ctx.fillRect(5 * UNIT, 14 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 15 * UNIT, 8 * UNIT, 2 * UNIT);
    ctx.fillRect(13 * UNIT, 14 * UNIT, UNIT, UNIT);
    ctx.fillRect(5 * UNIT, 14 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 17 * UNIT, UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 17 * UNIT, UNIT, UNIT);
    ctx.fillRect(14 * UNIT, 17 * UNIT, UNIT, UNIT);
    ctx.fillRect(4 * UNIT, 15 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(3 * UNIT, 16 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(4 * UNIT, 18 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 18 * UNIT, UNIT, UNIT);
    ctx.fillRect(6 * UNIT, 21 * UNIT, UNIT, UNIT);
    ctx.fillRect(3 * UNIT, 22 * UNIT, 3 * UNIT, UNIT);
    ctx.fillRect(2 * UNIT, 21 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(2 * UNIT, 20 * UNIT, UNIT, UNIT);
    ctx.fillRect(UNIT, 18 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(0, 17 * UNIT, UNIT, UNIT);
    ctx.fillRect(11 * UNIT, 18 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(13 * UNIT, 18 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 20 * UNIT, UNIT, UNIT);
    ctx.fillRect(14 * UNIT, 20 * UNIT, UNIT, UNIT);
    ctx.fillRect(7 * UNIT, 23 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 23 * UNIT, 2 * UNIT, 4 * UNIT);
    ctx.fillRect(6 * UNIT, 25 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(5 * UNIT, 26 * UNIT, UNIT, UNIT);
    ctx.fillRect(7 * UNIT, 27 * UNIT, UNIT, UNIT);
}

function drawMickey1Clothes(){
    //clothes
    ctx.fillStyle = "#ED3833"
    ctx.fillRect(7 * UNIT, 18 * UNIT, 4 * UNIT, 5 * UNIT);
    ctx.fillRect(11 * UNIT, 21 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillStyle = "#AB2622"
    ctx.fillRect(8 * UNIT, 17 * UNIT, 4 * UNIT, UNIT);
    ctx.fillRect(6 * UNIT, 19 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 18 * UNIT, UNIT, UNIT);
    ctx.fillRect(7 * UNIT, 21 * UNIT, UNIT, UNIT);
    ctx.fillRect(6 * UNIT, 22 * UNIT, UNIT, UNIT);
    ctx.fillRect(9 * UNIT, 23 * UNIT, UNIT, UNIT);
    ctx.fillRect(10 * UNIT, 22 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(11 * UNIT, 20 * UNIT, UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 17 * UNIT, UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 20 * UNIT, UNIT, UNIT);
    ctx.fillRect(15 * UNIT, 20 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(14 * UNIT, 21 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(13 * UNIT, 22 * UNIT, UNIT, 2 * UNIT);
    ctx.fillStyle = "#FEF851"
    ctx.fillRect(12 * UNIT, 18 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(14 * UNIT, 18 * UNIT, UNIT, 2 * UNIT);
    ctx.fillStyle = "#ED3833"
    ctx.fillRect(10 * UNIT, 12 * UNIT, UNIT, UNIT);
}

function drawMickey1Shoes(){
    //shoes
    ctx.fillStyle = "#FEF851"
    ctx.fillRect(2 * UNIT, 28 * UNIT, 5 * UNIT, 3 * UNIT);
    ctx.fillRect(12 * UNIT, 28 * UNIT, 4 * UNIT, 3 * UNIT);
    ctx.fillStyle = "#F54A41"
    ctx.fillRect(0, 29 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(UNIT, 28 * UNIT, UNIT, UNIT);
    ctx.fillRect(2 * UNIT, 27 * UNIT, 3 * UNIT, UNIT);
    ctx.fillRect(5 * UNIT, 28 * UNIT, UNIT, UNIT);
    ctx.fillRect(6 * UNIT, 27 * UNIT, UNIT, UNIT);
    ctx.fillRect(7 * UNIT, 28 * UNIT, UNIT, UNIT);
    ctx.fillRect(8 * UNIT, 29 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 28 * UNIT, UNIT, UNIT);
    ctx.fillRect(11 * UNIT, 27 * UNIT, UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 28 * UNIT, UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 27 * UNIT, 3 * UNIT, UNIT);
    ctx.fillRect(16 * UNIT, 28 * UNIT, UNIT, UNIT);
    ctx.fillRect(17 * UNIT, 29 * UNIT, UNIT, 2 * UNIT);
    ctx.fillStyle = "#F5AA41"
    ctx.fillRect(UNIT, 29 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(2 * UNIT, 28 * UNIT, UNIT, UNIT);
    ctx.fillRect(4 * UNIT, 28 * UNIT, UNIT, UNIT);
    ctx.fillRect(5 * UNIT, 27 * UNIT, UNIT, UNIT);
    ctx.fillRect(6 * UNIT, 28 * UNIT, UNIT, UNIT);
    ctx.fillRect(7 * UNIT, 29 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 29 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 28 * UNIT, UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 27 * UNIT, UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 28 * UNIT, UNIT, UNIT);
    ctx.fillRect(15 * UNIT, 28 * UNIT, UNIT, UNIT);
    ctx.fillRect(16 * UNIT, 29 * UNIT, UNIT, 2 * UNIT);
}