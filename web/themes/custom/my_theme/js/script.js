document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('pricing-toggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    let isMonthly = true;

    toggleButton.addEventListener('click', function () {
        isMonthly = !isMonthly;

        monthlyPrices.forEach(p => p.style.display = isMonthly ? 'block' : 'none');
        yearlyPrices.forEach(p => p.style.display = isMonthly ? 'none' : 'block');
    });
});
