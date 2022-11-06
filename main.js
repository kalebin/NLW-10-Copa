function createGame(player1, hour, player2) {
  return `
  <li>
      <img src="/assets/${player1}.svg" alt="${player1}">
      <strong>${hour}</strong>
      <img src="/assets/${player2}.svg" alt="${player2}">
  </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
   <div class="card" style="animation-delay: ${delay}"s>
      <h2>${date}<span> ${day}</span></h2>
        <ul>
          ${games} 
        </ul>   
   </div> 
  `
}

document.querySelector("#cards").innerHTML =
  createCard("21/11", "segunda", createGame("brasil", "07:00", "cameroon")) +
  createCard(
    "24/11",
    "quinta",
    createGame("brasil", "07:00", "cameroon") +
      createGame("brasil", "07:00", "cameroon")
  ) +
  createCard("21/11", "segunda", createGame("brasil", "07:00", "cameroon"))
