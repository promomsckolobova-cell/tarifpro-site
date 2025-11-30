// TarifPro static site script
console.log("TarifPro loaded");

// Footer year
document.addEventListener("DOMContentLoaded", function () {
  const y = new Date().getFullYear();
  const el = document.getElementById("year");
  if (el) el.textContent = y;
});
