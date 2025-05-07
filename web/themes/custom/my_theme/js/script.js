document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-price");
  const monthlyPrices = document.querySelectorAll(".price.monthly");
  const yearlyPrices = document.querySelectorAll(".price.yearly");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");

      const selected = btn.dataset.period;

      if (selected === "monthly") {
        monthlyPrices.forEach(el => el.classList.remove("hidden"));
        yearlyPrices.forEach(el => el.classList.add("hidden"));
      } else {
        yearlyPrices.forEach(el => el.classList.remove("hidden"));
        monthlyPrices.forEach(el => el.classList.add("hidden"));
      }
    });
  });
});
