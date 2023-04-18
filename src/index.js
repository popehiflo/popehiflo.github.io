import { greetingHandler, clockHandler } from './utils/about-section.js';
import { projectsHandler } from './utils/projects-section.js';

// Loader
function loaderHandler() {
  window.addEventListener('DOMContentLoaded', () => {
    let loader = document.querySelector('.loader__container');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 3000);
  });
};

// Buttons sidebar menu and theme toggler
function menuToogleHandler() {
  // button menu and div sidebar
  let btnMenu = document.querySelector('#btn-menu');
  let iconBtnMenu = btnMenu.getElementsByTagName('i')[0];
  let barSide = document.querySelector('.sidebar');

  btnMenu.addEventListener('click', () => {
    iconBtnMenu.classList.toggle('fa-times');
    barSide.classList.toggle('active');
  });


  // Button Theme
  let btnTheme = document.querySelector('#btn-theme-toggler');
  let iconBtnTheme = btnTheme.getElementsByTagName('i')[0];

  btnTheme.addEventListener('click', () => {
    if (iconBtnTheme.classList.contains('fa-sun')) {
      iconBtnTheme.classList.replace('fa-sun', 'fa-moon');
      document.body.classList.add('active');
    } else {
      iconBtnTheme.classList.replace('fa-moon', 'fa-sun');
      document.body.classList.remove('active');
    }
  });
};


// Footer
function footerHandler() {
  let currentYear = new Date().getFullYear();
  document.querySelector('.footer').innerHTML = `
    © Copyright <span>popehiflo</span>, ${currentYear}. All rights reserved.
  `;
};

loaderHandler();
menuToogleHandler();
greetingHandler();
clockHandler();
projectsHandler();
footerHandler();
