function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// ODEČÍTÁNÍ ČASU (nepovinné, pokud nechceš countdown, můžeš to smazat)
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const endDate = new Date("2025-06-22T23:59:59").getTime();
  const now = new Date().getTime();
  const diff = endDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "Akce skončila!";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}

if (countdown) {
  setInterval(updateCountdown, 1000);
  updateCountdown();
}

// CAROUSEL - pokoje
let currentRoom = 0;

function showRoom(index) {
  const rooms = document.querySelectorAll('.room');
  rooms.forEach((room, i) => {
    room.classList.toggle('active', i === index);
  });
}

function prevRoom() {
  const rooms = document.querySelectorAll('.room');
  currentRoom = (currentRoom - 1 + rooms.length) % rooms.length;
  showRoom(currentRoom);
}

function nextRoom() {
  const rooms = document.querySelectorAll('.room');
  currentRoom = (currentRoom + 1) % rooms.length;
  showRoom(currentRoom);
}

document.addEventListener('DOMContentLoaded', () => {
  showRoom(currentRoom);
});



document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const answer = button.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});


// Vyhledání select boxu
const roomSelect = document.getElementById('typ_pokoje');

// Při načtení stránky nastavíme pokoj z carouselu
document.addEventListener('DOMContentLoaded', () => {
  showRoom(currentRoom);
  setSelectedRoom(currentRoom);
});

// Při kliknutí na „Rezervace“ nastavíme nejlepší pokoj
document.querySelectorAll('.rezervace-button').forEach(button => {
  button.addEventListener('click', () => {
    // Nastaví nejlepší pokoj (index 2 = Rodinný)
    currentRoom = 2;
    showRoom(currentRoom);
    setSelectedRoom(currentRoom);
  });
});

 window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });


