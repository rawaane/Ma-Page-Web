/**********Home background light**********/
const modeSombre = document.querySelector('.mode-icon');

modeSombre.addEventListener('click', () => {
    modeSombre.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});


/***Menu button***/
let menu = document.querySelector('.menu');
let nav = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    menu_navbar = document.querySelector(".navbar");
    menu_navbar.classList.toggle(".active")
}
// function greeting(){
//     alert(`bonjour ${name}`);
// }

// let name = prompt("Saisissez un nom :");
// greeting()