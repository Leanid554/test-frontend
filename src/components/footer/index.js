// script.js

document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('.select-selected');
    const items = document.querySelector('.select-items');
    const options = document.querySelectorAll('.select-items div');

    select.addEventListener('click', () => {
        items.style.display = items.style.display === 'block' ? 'none' : 'block';
        select.classList.toggle('select-arrow-active');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            select.textContent = option.textContent;
            items.style.display = 'none';
            select.classList.remove('select-arrow-active');
            // Обновите значение скрытого селекта, если нужно
            // document.querySelector('select[name="city"]').value = option.getAttribute('data-value');
        });
    });

    window.addEventListener('click', (event) => {
        if (!document.querySelector('.custom-select-wrapper').contains(event.target)) {
            items.style.display = 'none';
            select.classList.remove('select-arrow-active');
        }
    });
});
