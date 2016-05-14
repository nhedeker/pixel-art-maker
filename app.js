//The JS that I know works for the basic webpage

//Please see comment at top of newApp.js

'use strict';
var colors = document.getElementsByClassName('color');
var currentColor = document.getElementById('selectedColor');
var pixelGrid = document.getElementById('pixelGrid');
var eraser = document.getElementById('eraser');
var erase = false;

//Changes the color of the pixel
var changeColor = function(event){
   var color;
   if (erase) {
      color = 'white';
      var borderColor = 'grey';
      event.target.style.borderColor = borderColor;
   }
   else{
      var css = window.getComputedStyle(currentColor);
      color = css.getPropertyValue("background-color");
      event.target.style.borderColor = color;
   }
   event.target.style.backgroundColor = color;
}

//Div elements as pixels
for (var i = 1; i <= 1856; i++){
   var pixel = document.createElement('div');
   pixel.className = 'pixel';
   pixel.addEventListener('click', changeColor)
   pixelGrid.appendChild(pixel);
}

//Changes the color of the 'paintbrush'
var changeSelectedColor = function(event){
   var css = window.getComputedStyle(event.target);
   var color = css.getPropertyValue("background-color");
   currentColor.style.backgroundColor = color;
}

//Adds events to the colors of the palette
for (var i = 0; i < colors.length; i++){
   colors[i].addEventListener('click', changeSelectedColor);
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

eraser.addEventListener('click', eraserClicked);
