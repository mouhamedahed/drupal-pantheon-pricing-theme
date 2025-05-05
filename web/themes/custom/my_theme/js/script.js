document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-price').forEach(button => {
    button.addEventListener('click', () => {
      const period = button.dataset.period;

      // Toggle active class on buttons
      document.querySelectorAll('.toggle-price').forEach(btn => {
        btn.classList.remove('active');
      });
      button.classList.add('active');

      // Toggle pricing display
      document.querySelectorAll('.monthly').forEach(el => {
        el.style.display = (period === 'monthly') ? 'block' : 'none';
      });
      document.querySelectorAll('.yearly').forEach(el => {
        el.style.display = (period === 'yearly') ? 'block' : 'none';
      });
    });
  });
});
