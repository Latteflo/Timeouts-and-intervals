console.log("WARNING! In exactly five seconds something will explode");

function theExplosion() {
  console.log("BOOM!");
}

setTimeout(theExplosion, 5000);
//You can also combine timeout and events, the only limit is your imagination.

function theExplosion() {
  alert("BOOM!");
}

const button = document.createElement("button");
button.textContent = "WARNING";
button.addEventListener("click", () => {
  // this will delay the event by 5 seconds
  setTimeout(theExplosion, 5000);
});
document.body.appendChild(button);


//Recursion
//You can use recursion (a function that calls itself) to create repetitive delays.
//We need a BaseCase for the recursion to return to, and when that one is met, the recursion stops.

function heyYou() {
    let times = 0;
  console.log("Hey! You! I called you " + times + " times!");
  times++;

  const nextCall = Math.floor(Math.random() * 2000); // Random delay until heyYou() is called again
  setTimeout(heyYou, nextCall);
}
//The setInterval() function
//The setInterval is another way to call a function multiple times. It works exactly like setTimeout except, the function is called repetitively.

//Simple example
//The previous "hey you" example can be rewritten like this:


function heyYou() {
  let times = 0;
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}

setInterval(heyYou, 1000);
// Clearing timers
// You can cancel any previously set interval or timeout, using clearTimeout or clearInterval.

let interval;
let times = 0;

function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}

buttonThreeSeconds = document.createElement("button");
buttonThreeSeconds.textContent = "say hey every 3 seconds";
buttonThreeSeconds.addEventListener("click", () => {
  interval = setInterval(heyYou, 3000);
});

buttonStop = document.createElement("button");
buttonStop.textContent = "Stop saying hey";
buttonStop.addEventListener("click", () => {
  // We must first check if there is an interval
  if (interval != undefined) {
    clearInterval(interval);
  }
});

document.body.appendChild(buttonThreeSeconds);
document.body.appendChild(buttonStop);

