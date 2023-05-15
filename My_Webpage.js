const modeSombre = document.querySelector('.mode');
const modeIcon = document.querySelector('.mode-icon');
const body = document.querySelector('body');

modeSombre.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    modeIcon.classList.toggle('bx-moon');
    modeIcon.classList.toggle('bx-sun');
});