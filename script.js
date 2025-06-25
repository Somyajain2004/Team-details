let players = [];

fetch('data/players.json')
  .then(response => response.json())
  .then(data => {
    players = data;
    renderPlayerCards();
  });

function renderPlayerCards() {
  const grid = document.querySelector('.player-grid');
  players.forEach((player, index) => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.innerHTML = `
      <h3>${player.name}</h3>
      <p>${player.role}</p>
    `;
    card.addEventListener('click', () => showModal(index));
    grid.appendChild(card);
  });
}

function showModal(index) {
  const player = players[index];
  document.getElementById("modal-name").innerText = player.name;
  document.getElementById("jersey").innerText = player.jersey;
  document.getElementById("matches").innerText = player.matches;
  document.getElementById("sr").innerText = player.strikeRate;
  document.getElementById("bp").innerText = player.best;
  document.getElementById("modal").classList.remove("hidden");
}

function hideModal() {
  document.getElementById("modal").classList.add("hidden");
}
