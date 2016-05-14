//The JS I am trying to make work with the bonus pencil tool ability

'use strict';

var colors = document.getElementsByClassName('color');
var currentColor = document.getElementById('selectedColor');
var pixelGrid = document.getElementById('pixelGrid');

var eraser = document.getElementById('eraser');
var pencil = document.getElementById('pencil');
var erase = false;
var pencilStatus = false;

//Sets div elements as pixels
for (var i = 1; i <= 1856; i++){
   var pixel = document.createElement('div');
   pixel.className = 'pixel';
   pixel.addEventListener('mousedown', draw);
   pixel.addEventListener('mouseup', removeDraw);
   pixelGrid.appendChild(pixel);
}

pencil.addEventListener('click', pencilClicked);
eraser.addEventListener('click', eraserClicked);

//Adds events to the colors of the palette
for (var i = 0; i < colors.length; i++){
   colors[i].addEventListener('click', changeSelectedColor);
}

//Changes the color of the pixel
var changeColor = function(target){
   var color;
   if (erase) {
      color = 'white';
      var borderColor = 'grey';
      target.style.borderColor = borderColor;
   }
   else{
      var css = window.getComputedStyle(currentColor);
      color = css.getPropertyValue("background-color");
      target.style.borderColor = color;
   }
   target.style.backgroundColor = color;
}

var draw = function(event){
   if (pencilStatus){
      addDraw();
   }
   changeColor(event.target);
}

//Changes the color of the 'paintbrush'
var changeSelectedColor = function(event){
   var css = window.getComputedStyle(event.target);
   var color = css.getPropertyValue("background-color");
   currentColor.style.backgroundColor = color;
}

//Clicks eraser event
var eraserClicked = function(event){
   if (erase){
      eraser.style.borderWidth = '0';
      erase = false;
   }
   else{
      eraser.style.borderWidth = '5px';
      erase = true;
   }
}

//Clicks pencil event
var pencilClicked = function(event){
   if (pencilStatus){
      pencil.style.borderWidth = '0';
      pencilStatus = false;

   }
   else {
      pencil.style.borderWidth = '5px';
      pencilStatus = true;
   }
}

var removeDraw = function(){
   var pixelGrid = document.getElementById('pixelGrid');
   var pixels = pixelGrid.childNodes;
   for(var i = 0; i < pixels.length; i++){
      pixels[i].removeEventListener('mouseover', changeColor);
   }
}

var addDraw = function(){
   var pixelGrid = document.getElementById('pixelGrid');
   var pixels = pixelGrid.childNodes;
   for(var i = 0; i < pixels.length; i++){
      pixels[i].addEventListener('mouseover', changeColor);
   }
}
