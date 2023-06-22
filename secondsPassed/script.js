//Write a function that displays every second that has passed on the page
// since it was opened.
// The display should be refreshed every second. 
//If 60 seconds are elapsed, write "a minute has passed",
// then "2 minutes have passed" (for 120 seconds and more), etc.

let textSpace = document.querySelector("h1")
let seconds = 0 ;
let minutes = 0;

const displayTime = () => {
    seconds++; 
    if (seconds < 60) {
        textSpace.textContent = `${seconds} seconds have passed since you opened the page!`;
    } else {
        let minutes = Math.floor(seconds / 60);
        minutes++
        textSpace.textContent = `${minutes} minutes have passed since you opened the page!`;
    }
}

setInterval(displayTime, 1000);
