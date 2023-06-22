let button = document.querySelector(".button")
let sheet = document.querySelector("p")
let inputField = document.querySelector("input");

const typewriter = () => {
  let typedWords = document.querySelector("input").value
  inputField.value = ""
  let wordIndex = 0

  let interval = setInterval(function () {
    if (wordIndex < typedWords.length) {
      sheet.textContent += typedWords[wordIndex]
      wordIndex++
    } else {
      clearInterval(interval)
    }
  }, 500)
}

button.addEventListener("click", typewriter)
