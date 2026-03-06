// Scroll suave al hacer clic en los enlaces del nav
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || !targetId.startsWith("#")) return;

    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Año dinámico en el footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
