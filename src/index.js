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


// Contact section - Marquee sync & Copy email interaction
function contactHandler() {
  const marqueeGroup1 = document.querySelector('.contact__marquee-group:first-child');
  const marqueeGroup2 = document.querySelector('.contact__marquee-group[aria-hidden="true"]');
  if (marqueeGroup1 && marqueeGroup2) {
    marqueeGroup2.innerHTML = marqueeGroup1.innerHTML;
  }

  const btnCopy = document.querySelector('#btn-copy-email');
  if (!btnCopy) return;

  const email = btnCopy.getAttribute('data-email') || 'popehiflo@gmail.com';
  const icon = btnCopy.querySelector('i');
  const feedback = btnCopy.querySelector('.copy-feedback');
  let resetTimeout;

  btnCopy.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      btnCopy.classList.add('copied');
      if (icon) {
        icon.classList.remove('fa-copy');
        icon.classList.add('fa-check');
      }
      if (feedback) {
        feedback.textContent = '¡Copiado!';
      }

      clearTimeout(resetTimeout);
      resetTimeout = setTimeout(() => {
        btnCopy.classList.remove('copied');
        if (icon) {
          icon.classList.remove('fa-check');
          icon.classList.add('fa-copy');
        }
        if (feedback) {
          feedback.textContent = 'Copiar';
        }
      }, 2000);
    } catch (err) {
      console.error('Error al copiar correo:', err);
    }
  });
}

// Footer
function footerHandler() {
  let currentYear = new Date().getFullYear();
  document.querySelector('.footer').innerHTML = `
    © Copyright <span>popehiflo</span>, ${currentYear}. Todos los derechos reservados.
  `;
};

themeHandler();
sidebarHandler();
greetingHandler();
clockHandler();
projectsHandler();
blogsHandler();
contactHandler();
footerHandler();
