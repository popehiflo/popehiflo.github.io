import { greetingHandler, clockHandler } from './utils/about-section.js';
import { projectsHandler } from './utils/projects-section.js';

// Loader
function removeLoader(loader) {
  setTimeout(() => {
    loader.classList.add('loader-hidden');
  }, 3000);
};

function loaderHandler() {
  // DOM loaded
  window.addEventListener('DOMContentLoaded', () => {
    let loader = document.querySelector('.loader__container');
    removeLoader(loader);
    setTimeout(() => {
      // waiting transition
      loader.style.display = 'none';
    }, 5000);
  });
};

// Buttons sidebar menu and theme toggler
function menuToogleHandler() {
  // button menu and div sidebar
  let btnMenu = document.querySelector('#btn-menu');
  let iconBtnMenu = btnMenu.getElementsByTagName('i')[0];
  let barSide = document.querySelector('.sidebar');

  // sections and navlinks
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('.sidebar .sidebar__menu a');

  btnMenu.addEventListener('click', () => {
    iconBtnMenu.classList.toggle('fa-times');
    barSide.classList.toggle('active');
  });

  window.onscroll = () => {
    // icon for sidebar
    iconBtnMenu.classList.remove('fa-times');
    barSide.classList.remove('active');
    // scrollspy for sidebar
    sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 50;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(navlink => {
          navlink.classList.remove('active');
          document.querySelector('.sidebar .sidebar__menu a[href*=' + id +']').classList.add('active');
        });
      }
    });
  };

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
