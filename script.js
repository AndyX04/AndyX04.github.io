const countdown = document.getElementById("countdown");
function updateCountdown() {
  const endDate = new Date("2025-06-09T23:59:59").getTime();
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
setInterval(updateCountdown, 1000);
updateCountdown();
