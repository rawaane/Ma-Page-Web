/**********background light**********/
const modeSombre = document.querySelector('.mode-icon');

modeSombre.addEventListener('click', () => {
    modeSombre.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});