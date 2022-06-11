// Button menu
let btnMenu = document.querySelector('#btn-menu');
let barSide = document.querySelector('.sidebar');

btnMenu.onclick = () => {
  btnMenu.classList.toggle('fa-times');
  barSide.classList.toggle('active');
}

// Button theme
let btnTheme = document.querySelector('#btn-theme-toggler');
btnTheme.onclick = () => {
  btnTheme.classList.toggle('fa-sun');
  if (btnTheme.classList.contains('fa-sun')) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }
}