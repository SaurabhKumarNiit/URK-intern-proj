let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");
let progressStartValue = 0,    
progressEndValue = 70,    
speed = 50;

let progress = setInterval(() => {
progressStartValue++;
progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);


// -----------------------------------------------------

let topProgress = document.querySelector(".top-progress"),
topProgressValue = document.querySelector(".top-progress-value");
let topProgressStartValue = 0,    
topProgressEndValue = 80,    
topspeed = 50;

let topProgressBar = setInterval(() => {
    topProgressStartValue++;
    topProgressValue.textContent = `${topProgressStartValue}%`
    topProgress.style.background = `conic-gradient(#7d2ae8 ${topProgressStartValue * 3.6}deg, #ededed 0deg)`
if(topProgressStartValue == topProgressEndValue){
    clearInterval(topProgressBar);
}    
}, topspeed);


// -----------------------------------------------------------------

let meProgress = document.querySelector(".me-progress"),
meProgressValue = document.querySelector(".me-progress-value");
let meProgressStartValue = 0,    
meProgressEndValue = 65,    
mespeed = 50;

let meProgressBar = setInterval(() => {
    meProgressStartValue++;
    meProgressValue.textContent = `${meProgressStartValue}%`
    meProgress.style.background = `conic-gradient(#7d2ae8 ${meProgressStartValue * 3.6}deg, #ededed 0deg)`
if(meProgressStartValue == meProgressEndValue){
    clearInterval(meProgressBar);
}    
}, mespeed);


//-----------------------------------------------------

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }