// Button menu
let btnMenu = document.querySelector('#btn-menu');

btnMenu.onclick = () => {
  btnMenu.classList.toggle('fa-times');
}

// Button theme
let btnTheme = document.querySelector('#btn-theme-toggler');
btnTheme.onclick = () => {
  btnTheme.classList.toggle('fa-sun');
}