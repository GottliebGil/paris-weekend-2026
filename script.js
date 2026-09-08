const cards = document.querySelectorAll(".planning-card");
const selection = document.querySelector("#selection");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((item) => item.removeAttribute("aria-current"));
    card.setAttribute("aria-current", "true");
    selection.textContent = `${card.dataset.area} selected — we’ll plan this section next.`;
  });
});
