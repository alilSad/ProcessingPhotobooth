function takePic() {
  snapshots.push(webcam.get());
   

} 
// -----------------------------------------------------------------------------
function savePicture(){

var c = get(0, 0, 640, 480);
c.save('myCanvas.png');
return false;

}
// -----------------------------------------------------------------------------

function edit() {

webcam.hide(); 
image(snapshots[inc], 0, 0, 640, 480);
editbutt.hide();
pic.hide();


goBack.show();
savebutt.show();
colbutt.show();
cPhoto.show();
cColour.show();
cSticker.show();
clearSticks.show();
radio.show();

}
// ----------------St-------------------------------------------------------------

function back() {

editbutt.show();
pic.show();
webcam.show();


goBack.hide();
savebutt.hide();
colbutt.hide();
cPhoto.hide();
cColour.hide();
cSticker.hide();
clearSticks.hide();
radio.hide();

}

// -----------------------------------------------------------------------------

function clearSt() {

  
  layer.clear();
  incL();
  incR();
  
}


// -----------------------------------------------------------------------------

function colour(){


item = colbutt.value();
noStroke();






if(item == 'Grayscale') {

  incL();
  incR();
  filter(GRAY, 50);
  
  
}else if(item == 'Threshold') {

  incL();
  incR();
  filter(THRESHOLD);
  
  
}else if(item == 'Posterize') {

  incL();
  incR();
  filter(POSTERIZE, 4);
  
  
}else if(item == 'Blur') {

  incL();
  incR();
  filter(BLUR, 4);
  
  
}else if(item == 'Lighten') {
  
  incL();
  incR();
  filter(DILATE);
 
  
}else if(item == 'Darken') {

  incL();
  incR();
  filter(ERODE);
  
  
} else if(item == 'No filter') {

  incL();
  incR();
  
}




}
// -----------------------------------------------------------------------------



function mousePressed() {

 thingo = radio.value();
 
 if(thingo == 'heart') {
 
   layer.image(heart, mouseX -40 , mouseY - 40 , 100, 100);
 
 } else if(thingo == 'bao') {
 
   layer.image(bao, mouseX - 40, mouseY- 40, 100, 100);
   
 } else if (thingo == 'star') {
 
   layer.image(star, mouseX - 40 , mouseY - 40 , 100,100);
 
 } else {
 
   noStroke();
 }
 



}


// -----------------------------------------------------------------------------
function incL() {

 inc--;
 if (inc < 0) {
 inc = 0;
 
 }
  
 
 print(inc);
 image(snapshots[inc], 0, 0, 640, 480);
  
}

// -----------------------------------------------------------------------------
function incR() {

inc++;
if (inc > snapshots.length) {
inc = snapshots.length;
}
print(inc);
image(snapshots[inc], 0, 0, 640, 480);
}
// -----------------------------------------------------------------------------
