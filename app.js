'use strict';
var colors = document.getElementsByClassName('color');
var currentColor = document.getElementById('selectedColor');
var pixelGrid = document.getElementById('pixelGrid');

var changeColor = function(event){
   var css = window.getComputedStyle(currentColor);
   var color = css.getPropertyValue("background-color");
   event.target.style.backgroundColor = color;
   event.target.stye.borderColor = color;
}

for (var i = 1; i <= 1827; i++){
   var pixel = document.createElement('div');
   pixel.className = 'pixel';
   pixel.addEventListener('click', changeColor)
   pixelGrid.appendChild(pixel);
}

var changeSelectedColor = function(event){
   var css = window.getComputedStyle(event.target);
   var color = css.getPropertyValue("background-color");
   currentColor.style.backgroundColor = color;
}

for (var i = 0; i < colors.length; i++){
   colors[i].addEventListener('click', changeSelectedColor);
}
