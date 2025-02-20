import { greetingHandler, clockHandler } from './utils/about-section.js';
import { blogsHandler } from './utils/blogs-section.js';
import { projectsHandler } from './utils/projects-section.js';
import { themeHandler } from './utils/theme-handler.js';

// Loader
/* Se mueve logica de loader a un script inline en head de index.html */

// Buttons sidebar menu and theme toggler
function sidebarHandler() {
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
};


// Footer
function footerHandler() {
  let currentYear = new Date().getFullYear();
  document.querySelector('.footer').innerHTML = `
    © Copyright <span>popehiflo</span>, ${currentYear}. All rights reserved.
  `;
};

themeHandler();
sidebarHandler();
greetingHandler();
clockHandler();
projectsHandler();
blogsHandler();
footerHandler();
