let score = 0
let moles = document.querySelectorAll(".hole")
let scoreBoard=document.querySelector("h1")

const showMole = () => {
  //we need to have all moles hidden
  // moles.forEach((mole) => mole.classList.remove("mole"))
  /// we pick a random hole for the mole to appear in
  let mole = moles[Math.floor(Math.random() * moles.length)]
   mole.classList.add("mole")
  /// after a second the mole dissapears
  setTimeout(function () {
    mole.classList.remove("mole")
  }, 1000)
}

setInterval(showMole, Math.random()* 1000)

///we add event listeners to the mole
moles.forEach((mole) =>
  mole.addEventListener("click", function () {
    if (mole.classList.contains("mole")) {
      score++
      document.getElementById("score").textContent =
        "Got it! Curent score :" + score
       scoreBoard.style.color="green"
    } else if (!mole.classList.contains("mole")) {
      score = 0
      document.getElementById("score").textContent = "Buuu!!! Start again!"
      scoreBoard.style.color="darkred"
    }
  })
)


/// show the mole from time to time and set diferent intervals for diferent levels
//if (score > 10){
// setInterval(showMole,500)
//} else if (score > 5) {
//  setInterval(showMole, 1000)
//} else {
//  setInterval(showMole, 2000)
//}


// Path: cursor.js
