document.addEventListener('DOMContentLoaded', function() {
  // Price Toggle
  document.querySelectorAll('.toggle-price').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.toggle-price').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });

      this.classList.add('active');
      this.setAttribute('aria-pressed', 'true');

      const period = this.dataset.period;
      document.querySelectorAll('.price.monthly').forEach(el => {
        el.classList.toggle('hidden', period !== 'monthly');
      });
      document.querySelectorAll('.price.yearly').forEach(el => {
        el.classList.toggle('hidden', period !== 'yearly');
      });
    });
  });

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);

      const answer = this.nextElementSibling;
      if (answer && answer.classList.contains('faq-answer')) {
        answer.classList.toggle('active');
      }
    });
  });
});
