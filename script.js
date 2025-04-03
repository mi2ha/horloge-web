let is12h = false;

function updateTimezones() {
  const now = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: is12h,
  };

  const localTime = now.toLocaleTimeString("fr-FR", options);
  document.getElementById("horologe").textContent = `Local: ${localTime}`;

  const parisTime = new Intl.DateTimeFormat("fr-FR", {
    ...options,
    timeZone: "Europe/Paris",
  }).format(now);
  document.getElementById("horologe_paris").textContent = `Paris: ${parisTime}`;

  const nyTime = new Intl.DateTimeFormat("en-US", {
    ...options,
    timeZone: "America/New_York",
  }).format(now);
  document.getElementById("horologe_ny").textContent = `New York: ${nyTime}`;
}

document.getElementById("toggle-format").addEventListener("click", () => {
  is12h = !is12h;
  updateTimezones();
});

setInterval(updateTimezones, 1000);
document.addEventListener("DOMContentLoaded", () => {
  updateTimezones();
});

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});