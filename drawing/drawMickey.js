function drawMickey1(x,y,s) {
    ctx.save();
    ctx.scale(s, s);
    ctx.translate(x*UNIT,y*UNIT);
    // face colour: #F5AA41 outline of face: #AB2622 main colour of pants: #ED3833 shadow of shoes (dark yellow): #F5AA41 main colour of shoes: #FEF851 mouth: #ED3833 gloves grey: #AAAAAA gloves white: #FFFFFF
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

function drawMickey2(x,y,s) {
    ctx.save();
    ctx.scale(s, s);
    ctx.translate(x*UNIT,y*UNIT);
    ctx.fillStyle = "black"
    drawMickey2BlackDetails();
    ctx.translate(UNIT,0);
    drawMickey1FaceColour();
    drawMickey1FaceOutline();
    drawMickey2Clothes();
    drawMickey2Shoes();
    ctx.translate(-UNIT,0);
}

function drawMickey3(x,y,s) {
    ctx.save();
    ctx.scale(s, s);
    ctx.translate(x*UNIT, y*UNIT);
    ctx.fillStyle = "black"
    ctx.translate(2 * UNIT,0)
    drawMickey1LeftEar();
    drawMickey1BackHead();
    drawMickey1FaceDetails();
    drawMickey1FaceOutline();
    drawMickey1FaceColour();
    ctx.translate(-2 * UNIT, 0)
    drawMickey3Body();
    drawMickey3Gloves();
    drawMickey3Clothes();
    drawMickey3Shoes();

}

function drawMickey3Body(){
    ctx.fillStyle = "black"
    ctx.fillRect(4 * UNIT, 14 * UNIT, 3 * UNIT, 3 * UNIT);
    ctx.fillRect(5 * UNIT, 13 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 14 * UNIT, 3 * UNIT, 4 * UNIT);
    ctx.fillRect(11 * UNIT, 15 * UNIT, 3 * UNIT, 3 * UNIT);
    ctx.fillRect(14 * UNIT, 15 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 16 * UNIT, UNIT, UNIT);
    ctx.fillRect(4 * UNIT, 18 * UNIT, UNIT, 3 * UNIT);
    ctx.fillRect(5 * UNIT, 17 * UNIT, UNIT,UNIT);
    ctx.fillRect(5 * UNIT, 20 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 18 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(3 * UNIT, 19 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 18 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 20 * UNIT,  UNIT, UNIT);
    ctx.fillRect(2 * UNIT, 17 * UNIT,  UNIT, 3 * UNIT);
    ctx.fillRect(UNIT, 16 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(0, 14 * UNIT,UNIT, 2 * UNIT);
    ctx.fillRect(14 * UNIT, 18 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(15 * UNIT, 17 * UNIT, UNIT, UNIT);
    ctx.fillRect(16 * UNIT, 14 * UNIT, UNIT, 6 * UNIT);
    ctx.fillRect(15 * UNIT, 14 * UNIT, UNIT, UNIT);
    ctx.fillRect(17 * UNIT, 18 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(17 * UNIT, 12 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(17 * UNIT, 13 * UNIT, UNIT, UNIT);
    ctx.fillRect(19 * UNIT, 13 * UNIT, 3 * UNIT, UNIT);
    ctx.fillRect(21 * UNIT, 14 * UNIT,  UNIT, UNIT);
    ctx.fillRect(20 * UNIT, 15 * UNIT, UNIT, 3 * UNIT);
    ctx.fillRect(6 * UNIT, 24 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 26 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(5 * UNIT, 25 * UNIT, UNIT, UNIT);
}

function drawMickey3Gloves(){
ctx.fillStyle = "#AAAAAA"
ctx.fillRect(17 * UNIT, 14 * UNIT, UNIT, 4 * UNIT);
ctx.fillRect(18 * UNIT, 13 * UNIT, UNIT,  UNIT);
ctx.fillRect(17 * UNIT, 17 * UNIT, 3 * UNIT, UNIT);
ctx.fillRect(20 * UNIT, 14 * UNIT, UNIT, UNIT);
ctx.fillRect(15 * UNIT, 15 * UNIT, UNIT, 2 * UNIT);
ctx.fillStyle = "#FFFFFF"
ctx.fillRect(18 * UNIT, 14 * UNIT, 2 * UNIT, 3 * UNIT);
}

function drawMickey3Clothes(){

}



function drawMickey3Shoes(){

}





function drawMickey2Clothes(){
    ctx.fillStyle = "#ED3833"
    ctx.fillRect(8 * UNIT, 18 * UNIT, 3 * UNIT, 4 * UNIT);//askk victor why x-coordiate is 8 because it is 9 but when I do 9 it actually does 10 on the drawing. same with all in this section.
    ctx.fillRect(7 * UNIT, 19 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 21 * UNIT, 3 * UNIT, UNIT);
    ctx.fillRect(8 * UNIT, 22 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 22 * UNIT, UNIT, UNIT);
    ctx.fillStyle = "#AB2622"
    ctx.fillRect(8 * UNIT, 17 * UNIT, 4 * UNIT, UNIT);
    ctx.fillRect(7 * UNIT, 18 * UNIT, UNIT,UNIT);
    ctx.fillRect(6 * UNIT, 19 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 21 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 22 * UNIT, UNIT, UNIT);
    ctx.fillRect(10 * UNIT, 22 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(9 * UNIT, 23 * UNIT, UNIT, UNIT);
    ctx.fillRect(13 * UNIT,22 * UNIT, 2 * UNIT,  UNIT);
    ctx.fillRect(14 * UNIT, 21 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(15 * UNIT, 20 * UNIT, UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 23 * UNIT, UNIT,  UNIT);
    ctx.fillRect(13 * UNIT, 17 * UNIT, UNIT, UNIT);
    ctx.fillRect(15 * UNIT, 17 * UNIT,  UNIT, UNIT);
    ctx.fillRect(11 * UNIT, 20 * UNIT,  UNIT, UNIT);
    ctx.fillRect(13 * UNIT, 20 * UNIT, UNIT,UNIT);
    ctx.fillStyle = "#FEF851"
    ctx.fillRect(12 * UNIT, 18 * UNIT,  UNIT, 2 * UNIT);
    ctx.fillRect(14 * UNIT, 18 * UNIT,  UNIT, 2 * UNIT);
}

function drawMickey2Shoes(){ //this one is also shifted
    ctx.fillStyle = "#AB2622"
ctx.fillRect(UNIT, 24 * UNIT, 4 * UNIT,  UNIT);
ctx.fillRect(0 , 25 * UNIT, UNIT, 3 * UNIT); //When I put in 0 it actually appears on the drawing as 1 and the actual unit should be 1 but i PUT 0 to make it look right.
ctx.fillRect( UNIT, 28 * UNIT, UNIT, 2*UNIT);
ctx.fillRect(2 * UNIT, 29 * UNIT, 3 * UNIT, UNIT);
ctx.fillRect(2 * UNIT, 30 * UNIT, UNIT, UNIT);
ctx.fillRect(4 * UNIT, 30 * UNIT, UNIT, UNIT);
ctx.fillRect(3 * UNIT, 27 * UNIT, UNIT, 2 * UNIT);
ctx.fillRect(UNIT, 25 * UNIT, UNIT, UNIT);
ctx.fillRect(2 * UNIT, 26 * UNIT, UNIT, UNIT);
ctx.fillRect(5 * UNIT, 25 * UNIT, UNIT, UNIT);
ctx.fillRect(6 * UNIT, 26 * UNIT, UNIT, 2 * UNIT);
ctx.fillRect(7 * UNIT, 28 * UNIT, UNIT, 3 * UNIT);
ctx.fillRect(8 * UNIT, 29 * UNIT, UNIT, 2 * UNIT);
ctx.fillRect(9 * UNIT, 28 * UNIT, UNIT, UNIT);
ctx.fillRect(10 * UNIT, 27 * UNIT, UNIT, UNIT);
ctx.fillRect(11 * UNIT, 28 * UNIT, UNIT, UNIT);
ctx.fillRect(12 * UNIT, 27 * UNIT, 3 * UNIT, UNIT);
ctx.fillRect(15 * UNIT, 28 * UNIT, UNIT, UNIT);
ctx.fillRect(16 * UNIT, 29 * UNIT, UNIT, 2 * UNIT);
ctx.fillStyle = "#F5AA41"
ctx.fillRect(UNIT, 26 * UNIT, UNIT, 2 * UNIT);
ctx.fillRect(2 * UNIT, 27 * UNIT, UNIT, 2 * UNIT);
ctx.fillRect(3 * UNIT, 30 * UNIT, UNIT, UNIT);
ctx.fillRect(4 * UNIT, 28 * UNIT, UNIT, UNIT);
ctx.fillRect(5 * UNIT, 29 * UNIT, UNIT, 2 * UNIT);
ctx.fillRect(6 * UNIT, 28 * UNIT, UNIT, UNIT);
ctx.fillRect(5 * UNIT, 26 * UNIT, UNIT, UNIT);
ctx.fillRect(4 * UNIT, 25 * UNIT, UNIT, UNIT);
ctx.fillRect(9 * UNIT, 29 * UNIT, 2 * UNIT, 2 * UNIT);//right foot inside darker yellow find right foot outline to put them together as a section by itself to copy and paste for future mickeys.
ctx.fillRect(10 * UNIT, 28 * UNIT, UNIT, UNIT);
ctx.fillRect(11 * UNIT, 27 * UNIT, UNIT, UNIT);
ctx.fillRect(12 * UNIT, 28 * UNIT, UNIT, UNIT);
ctx.fillRect(14 * UNIT, 28 * UNIT, UNIT, UNIT);
ctx.fillRect(15 * UNIT, 29 * UNIT, UNIT, 2 * UNIT);
ctx.fillStyle = "#FEF851"
ctx.fillRect(2 * UNIT, 25 * UNIT, 2 * UNIT, UNIT);
ctx.fillRect(3 * UNIT, 26 * UNIT, 2 * UNIT, UNIT);
ctx.fillRect(4 * UNIT, 27 * UNIT, 2 * UNIT, UNIT);
ctx.fillRect(5 * UNIT, 28 * UNIT,  UNIT, UNIT);
ctx.fillRect(6 * UNIT, 29 * UNIT, UNIT, 2 * UNIT);
ctx.fillRect(11 * UNIT, 29 * UNIT, 4 * UNIT, 2 * UNIT);//right foot bright yellow inside starts here
ctx.fillRect(13 * UNIT, 28 * UNIT, UNIT, UNIT);
}

function drawMickey2BlackDetails(){
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
    ctx.fillRect(6 * UNIT, 18 * UNIT, 2 * UNIT,UNIT);
    ctx.fillRect(8 * UNIT, 17 * UNIT, UNIT, UNIT);
    ctx.fillRect(9 * UNIT, 15 * UNIT, 8 * UNIT, 2 * UNIT);
    ctx.fillRect(14 * UNIT, 14 * UNIT, 2 * UNIT,  UNIT);
    ctx.fillRect(UNIT, 19 * UNIT, 2 * UNIT, UNIT);
    ctx.fillRect(3* UNIT, 20 * UNIT, 2 * UNIT,  UNIT);
    ctx.fillRect(4 * UNIT, 21 * UNIT, 4 * UNIT,  UNIT);
    ctx.fillRect(13 * UNIT, 17 * UNIT, UNIT, UNIT);
    ctx.fillRect(15 * UNIT, 17 * UNIT,  UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 18 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(14 * UNIT, 18 * UNIT, UNIT, 2 * UNIT);
    ctx.fillRect(16 * UNIT, 18 * UNIT,  UNIT, 2 * UNIT);
    ctx.fillRect(13 * UNIT, 20 * UNIT, UNIT, UNIT);
    ctx.fillRect(15 * UNIT, 20 * UNIT, UNIT,  UNIT);
    ctx.fillRect(8 * UNIT, 23 * UNIT, 2 * UNIT, 2 * UNIT);//legs
    ctx.fillRect(8 * UNIT, 25 * UNIT,  UNIT, 3 * UNIT);
    ctx.fillRect(7 * UNIT, 25 * UNIT, UNIT,  UNIT);
    ctx.fillRect(12 * UNIT, 23 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 25 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillStyle = "#ED3833" //mouth
    ctx.fillRect(11 * UNIT, 12 * UNIT, UNIT, UNIT);
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
    ctx.fillStyle = "#ED3833"
    ctx.fillRect(10 * UNIT, 12 * UNIT, UNIT, UNIT);
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