"use strict";

var buttonOne = document.querySelector(".slider-button__1");
var buttonTwo = document.querySelector(".slider-button__2");
var buttonThree = document.querySelector(".slider-button__3");
var buttons = document.querySelectorAll(".slider-button");

var slideOne = document.querySelector(".slide-1");
var slideTwo = document.querySelector(".slide-2");
var slideThree = document.querySelector(".slide-3");
var sliders = document.querySelectorAll(".slide");

buttonOne.addEventListener("change", function(evt) {
  for (var button = 0; button < buttons.length; button++) {
    if (buttons[button] === buttonOne) {
      for (var i of sliders) {
        if (i === slideOne) {
          i.classList.toggle("visually-hidden");
        } else if (i.classList.contains("visually-hidden") === false) {
          i.classList.toggle("visually-hidden");
        }
      }
    }
  }
});

buttonTwo.addEventListener("change", function(evt) {
  for (var button = 0; button < buttons.length; button++) {
    if (buttons[button] === buttonTwo) {
      for (var i of sliders) {
        if (i === slideTwo) {
          i.classList.toggle("visually-hidden");
        } else if (i.classList.contains("visually-hidden") === false) {
          i.classList.toggle("visually-hidden");
        }
      }
    }
  }
});

buttonThree.addEventListener("change", function(evt) {
  for (var button = 0; button < buttons.length; button++) {
    if (buttons[button] === buttonThree) {
      for (var i of sliders) {
        if (i === slideThree) {
          i.classList.toggle("visually-hidden");
        } else if (i.classList.contains("visually-hidden") === false) {
          i.classList.toggle("visually-hidden");
        }
      }
    }
  }
});
