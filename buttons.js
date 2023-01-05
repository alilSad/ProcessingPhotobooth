function buttons() {

  pic = createButton('Take pic');
  pic.position(20, 500);
  pic.mousePressed(takePic);

// -----------------------------------------------------------------------------

  savebutt = createButton('Save Picture');
  savebutt.position(20, 500);
  savebutt.mousePressed(savePicture);
  savebutt.hide();
  
// -----------------------------------------------------------------------------
  
  editbutt = createButton ('Edit');
  editbutt.position(100, 500);
  editbutt.mousePressed(edit);
  
// -----------------------------------------------------------------------------
  
  leftArrow = createButton('<-');
  leftArrow.position(670, 22);
  leftArrow.mousePressed(incL);
  
// -----------------------------------------------------------------------------
  
  rightArrow = createButton('->');
  rightArrow.position(700,22);
  rightArrow.mousePressed(incR);
  
// -----------------------------------------------------------------------------

  goBack = createButton ('Exit edit mode');
  goBack.position(120, 500);
  goBack.mousePressed(back);
  goBack.hide();
// -----------------------------------------------------------------------------

colbutt = createSelect();
colbutt.position(120, 550);
  colbutt.option('No filter');
  colbutt.option('Grayscale');
  colbutt.option('Threshold');
  colbutt.option('Posterize');
  colbutt.option('Blur');
  colbutt.option('Lighten');
  colbutt.option('Darken');
  
colbutt.changed(colour);
colbutt.hide();




// -----------------------------------------------------------------------------


radio = createRadio();
  radio.option('heart');
  radio.option('star');
  radio.option('bao');
  radio.position(120,600);
  radio.hide();

// -----------------------------------------------------------------------------

clearSticks = createButton('Clear Edits', false);
clearSticks.position(230, 500);
clearSticks.mousePressed(clearSt);
clearSticks.hide();




// -----------------------------------------------------------------------------

   cPhoto = createDiv('Choose photo');
   cPhoto.style('font-size', '24px');
   cPhoto.position(750, 20);
   
   cColour = createDiv('Image filter');
   cColour.style('font-size', '16px');
   cColour.position(30, 550);
   
   cSticker = createDiv('Stickers');
   cSticker.style('font-size', '16px');
   cSticker.position(30, 600);
   
   
   cPhoto.hide();
   cColour.hide();
   cSticker.hide();
// -----------------------------------------------------------------------------
}
