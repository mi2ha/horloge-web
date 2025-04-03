function updateTimezones() {
  const now = new Date();
  const localTime = now.toLocaleTimeString("fr-FR", { hour12: false });
  document.getElementById("horologe").textContent = `Local: ${localTime}`;

  const parisTime = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);
  document.getElementById("horologe_paris").textContent = `Paris: ${parisTime}`;


  const nyTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);
  document.getElementById("horologe_ny").textContent = `New York: ${nyTime}`;
}

setInterval(updateTimezones, 1000);
document.addEventListener("DOMContentLoaded", (event) => {
  updateTimezones();
});
