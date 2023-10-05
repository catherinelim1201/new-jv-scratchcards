const scratchCards = document.querySelectorAll(".scratchcard")
const balance = document.querySelector("#balance")

scratchCards.forEach((card) => {
  card.addEventListener('click', (event) => {
    // fetch the current card & the value
    const currentCard = event.currentTarget
    const cardValue = parseInt(currentCard.dataset.amount)

    // get the current balance
    let newBalance = parseInt(document.querySelector("#balance").innerHTML, 10)

    newBalance += cardValue

    if (newBalance >= 10 && currentCard.dataset.scratched === "false") {
      balance.innerHTML = newBalance

      currentCard.dataset.scratched = "true"

      newBalance -= 10

      currentCard.innerHTML = `${cardValue}`

    } else {
      alert ("You can't scratched the card again!")
    }
  })
})
