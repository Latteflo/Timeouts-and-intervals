let score = 0
let moles = document.querySelectorAll(".hole")
let scoreBoard=document.querySelector("h1")

const showMole = () => {
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
      document.querySelector("body").style.cursor = "url('./cursorBang.cur'), auto"
      document.getElementById("score").textContent =
        "Got it! Curent score :" + score
       scoreBoard.style.color="green"
    } else if (!mole.classList.contains("mole")) {
      score = 0
      document.getElementById("score").textContent = "Buuu!!! Start again!"
      scoreBoard.style.color="darkred"
      document.querySelector("body").style.cursor = "url('./cursor.cur'), auto"
    }
  })
)



