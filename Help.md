Este es mi portafolio personal, soy programador backend, pero quiero ser un programador fullstack.
He recibido criticas porque mi pagina no es completamente responsive, por ejemplo uno de los problemas es cuando se pasa el mouse por encima del card de proyecto se intenta mostrar la descripcion del proyecto, pero sobrepasa hasta cubrir los tags (o tecnologias usadas en el proyecto), si necesitas cambiar drasticamente estos cards, hazlo, ya que recibi criticas que dicen que son cards comunes.
Ayudame a mejorar la funcionalidad, el diseño, responsividad y otras cosas que veas por conveniente. Actualmente los cards que muestran los proyectos
manejan imagenes de 1280x720 de extension .png. Si crees que es necesario manejar varias imagenes de distintos tamaños para hacer responsive los cards y la seccion o si necesitas distintas imagenes.
indicame que tamaños son necesarios, si necesitas que cambie la extension de los archivos, tambien lo hare. Por favor ayudame a mejorar esta seccion de proyectos debido a mi falta de conocimiento front, UX/UI, etc.
// src/data/MOCKDATA.js
const allProjects = [
  {
    id: "01",
    title: "Portafolio popehiflo.",
    image: "./public/assets/imgs/img-portfolio.png",
    description: "Portafolio construido con HTML, CSS y Javascript",
    tags: {
      html: "html",
      css: "css",
      js: "js"
    },
    category: {
      id: "frontend",
      name: "Frontend"
    },
    links: {
      github: "https://github.com/popehiflo/popehiflo.github.io",
      google: "https://popehiflo.github.io/",
      youtube: "https://www.youtube.com/@popehiflo/videos"
    }
  },
  {
    id: "02",
    title: "Proyecto Backend 02",
    image: "./public/assets/imgs/img-backend-0.png",
    description: "2 - Proyecto de una API con Node y Express. Este es un proyecto backend.",
    tags: {
      java: "java"
    },
    category: {
      id: "backend",
      name: "Backend"
    },
    links: {
      github: "https://github.com/popehiflo/popehiflo.github.io",
      google: "https://popehiflo.github.io/",
      youtube: "https://www.youtube.com/@popehiflo/videos"
    }
  },
  {
    id: "03",
    title: "Proyecto Frontend 03",
    image: "./public/assets/imgs/img-frontend-0.png",
    description: "3- Proyecto de sitio web estático en HTML + CSS. Este es un proyecto frontend.",
    tags: {
      vite: "vite",
      reactjs: "reactjs",
      ts: "ts"
    },
    category: {
      id: "frontend",
      nombre: "Frontend"
    },
    links: {
      github: "https://github.com/popehiflo/popehiflo.github.io",
      google: "https://popehiflo.github.io/",
      youtube: "https://www.youtube.com/@popehiflo/videos"
    }
  },
  {
    id: "04",
    title: "Proyecto Backend 04 con un nombre un poco mas largo",
    image: "./public/assets/imgs/img-backend-1.png",
    description: "4 - Proyecto de una API con Node y Express. Este es un proyecto backend.",
    tags: {
      nodejs: "nodejs"
    },
    category: {
      id: "backend",
      name: "Backend"
    },
    links: {
      github: "https://github.com/popehiflo/popehiflo.github.io",
      google: "https://popehiflo.github.io/",
      youtube: "https://www.youtube.com/@popehiflo/videos"
    }
  },
  {
    id: "05",
    title: "Proyecto Frontend 05",
    image: "./public/assets/imgs/img-frontend-0.png",
    description: "5 - Proyecto de sitio web estático en HTML + CSS. Este es un proyecto frontend.",
    tags: {
      angular: "angular",
      rxjs: "rxjs"
    },
    category: {
      id: "frontend",
      nombre: "Frontend"
    },
    links: {
      github: "https://github.com/popehiflo/popehiflo.github.io",
      google: "https://popehiflo.github.io/",
      youtube: "https://www.youtube.com/@popehiflo/videos"
    }
  },
  {
    id: "06",
    title: "Proyecto Backend 06",
    image: "./public/assets/imgs/img-backend-2.png",
    description: "6 - Proyecto de una API con Spring Boot y MongoDB. Este es un proyecto backend.",
    tags: {
      java: "java",
      springboot: "springboot",
      jpa: "jpa",
      mysql: "mysql"
    },
    category: {
      id: "backend",
      name: "Backend"
    },
    links: {
      github: "https://github.com/popehiflo/popehiflo.github.io",
      google: "https://popehiflo.github.io/",
    }
  }
];

export { allProjects };
// src/styles/index.css
@import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
@import url(https://fonts.googleapis.com/css?family=Black+Han+Sans:regular);

/* --- CSS VARIABLES --- */
:root {
  /* CSS variables for colors */
  --color-primary: #3279BD; 
  
  /* Colors for Dark Theme */
  --color-text-main-darktheme: #fff;
  --color-text-dark: #d3e3f3; 
  --color-bg-dark: #3d3d3d;
  
  /* Colors for Ligth Theme */
  --color-text-main-lighttheme: #1b3954;
  --color-text-light: #777;
  --color-bg-light: #e6e6e6;

  /* border for dark theme */
  --border-dark: 0.1rem solid rgba(0, 0, 0, 0.4);
  --border-dark-light: 0.1rem solid #555;

  /* border for ligth theme */
  --border-light: 0.1rem solid rgba(0, 0, 0, 0.2);
  --border-light-light: 0.1rem solid rgba(100, 100, 100, 0.2);

  --border-none: 0.1rem solid transparent;

  --box-shadow-card: 0.4rem 0.4rem 1rem #111, -0.4rem -0.4rem 1rem #333;
  --box-shadow-inset: 0.4rem 0.4rem 1rem #111 inset, -0.4rem -0.4rem 1rem #333 inset;
}
/* --- BASE --- */
* {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  transition: 0.2s linear;
  scroll-padding-top: 1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
/* scroll bar */
::-webkit-scrollbar {
  width: 1.5rem;
  background: var(--color-bg-dark);
}

::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 0.2rem;
}

body {
  background: var(--color-bg-dark);
  padding-left: 32rem;
}

body.active {
  --color-bg-dark: var(--color-bg-light);
  --color-text-main-darktheme: var(--color-text-main-lighttheme);
  --color-text-dark: var(--color-text-light);
  --border-dark: var(--border-light);
  --border-dark-light: var(--border-light-light);
  --box-shadow-card: 0.4rem 0.4rem 1rem #888, -0.4rem -0.4rem 1rem #ccc;
  --box-shadow-inset: 0.4rem 0.4rem 1rem #888 inset, -0.4rem -0.4rem 1rem #ccc inset;
}
/* --- REUSABLE CSS CLASSES --- */
.btn-primary {
  display: inline-block;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  font-size: 1.7rem;
  font-weight: 600;
  cursor: pointer;
  background: none;
  color: var(--color-text-main-darktheme);
  text-transform: uppercase;
  border: var(--border-dark);
}
.btn-primary-icon {
  display: block;
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  text-align: center;
  margin: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
  color: var(--color-text-main-darktheme);
  background: var(--color-bg-dark);
  border: var(--border-dark);
  border-radius: 0.5rem;
}
.btn-primary.active,
.btn-primary:hover,
.btn-primary-icon.active,
.btn-primary-icon:hover {
  box-shadow: var(--box-shadow-inset);
  color: var(--color-primary);
  border: var(--border-none);
}
section {
  padding: 2rem;
  margin: 1rem 1rem 5rem 1rem;
}
section:nth-child(2n) {
  border: var(--border-dark);
  border-radius: 1rem;
}

/* animation section - showSection */
section {
  view-timeline-name: --sections;
  view-timeline-axis: block;
  animation-timeline: --sections;
  animation-name: showSection;
  animation-range: entry 10% cover 30%;
  animation-fill-mode: both;
}
.heading {
  text-align: center;
  font-size: 5rem;
  color: var(--color-text-main-darktheme);
  padding-bottom: 2rem;
}
.heading span {
  color: var(--color-primary);
}

/* --- SIDEBAR/HEADER --- */
.sidebar {
  position: fixed;
  top: 1%;
  left: 1%;
  bottom: 2%;
  z-index: 999;
  width: 30rem;
  border: var(--border-dark);
  height: 98vh;
  padding: 2rem;
  text-align: center;
  border-radius: 1rem;
  background: var(--color-bg-dark);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
}
.sidebar .sidebar__user .user__image {
  height: 20rem;
  width: 20rem;
  margin: 1rem 0;
  border: var(--border-dark);
  border-radius: 0.5rem;
}
.sidebar .sidebar__user .user__text {
  color: var(--color-primary);
  font-size: 1.9rem;
  font-weight: 500;
}
.sidebar .sidebar__user .user__name {
  font-family: 'Black Han Sans', sans-serif;
  color: var(--color-text-main-darktheme);
  font-size: 2.2rem;
}
.sidebar .sidebar__menu {
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.sidebar .sidebar___social-media {
  display: flex;
  justify-content: space-between;
}
/* --- Buttons TOP */
#btn-menu {
  position: fixed;
  top: 1.5rem;
  left: 2rem;
  z-index: 1000;
  border-radius: 50%;
  display: none;
}
#btn-menu i.fa-times {
  transform: rotate(360deg);
}
#btn-theme-toggler {
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  z-index: 1000;
  border-radius: 50%;
}
#btn-theme-toggler i.fa-moon {
  transform: rotate(360deg);
}
/* PROJECTS */
.projects .projects__filter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.projects .projects__filter input[type="radio"] {
  visibility: hidden;
  display: none;
}
.projects .projects__filter input[type="radio"]:checked + label {
  box-shadow: var(--box-shadow-inset);
  color: var(--color-primary);
  border: var(--border-none);
}
.projects .projects__filter input[type="radio"]:checked + label > .project-amount {
  background: var(--color-primary);
  color: #fff;
}
.projects .projects__filter label .project-amount {
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.projects .projects__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 2fr));
  gap: 2rem;
}
.projects .projects__container .project__box {
  border-radius: 0.5rem;
  overflow: hidden;
  border: var(--border-dark);
  box-shadow: var(--box-shadow-card);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.projects .projects__container .project__box .project__box-image {
  /*height: 25rem;*/
  overflow: hidden;
  border-radius: 0.5rem 0.5rem 0 0;
  margin: -1rem -1rem 0 -1rem;
}
.projects .projects__container .project__box .project__box-image img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  align-self: center;
}
.projects .projects__container .project__box .project__box-details {
  position: absolute;
  top: 0;
  left: 0;
  height: 25rem;
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  background: var(--color-bg-dark);
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transform: scale(0);
}
.projects .projects__container .project__box:hover .project__box-details {
  transform: scale(1);
  transition: 0.6s;
}
.projects .projects__container .project__box .project__box-details .description {
  font-size: 1.6rem;
  color: var(--color-text-dark);
  text-align: center;
  padding: 2rem;
  transform: translateY(-5rem);
  opacity: 0;
  transition-delay: 0.3s;
}
.projects .projects__container .project__box:hover .project__box-details .description {
  transform: translate(0rem);
  opacity: 1;
}
.projects .projects__container .project__box .title {
  font-size: 1.8rem;
  color: var(--color-text-main-darktheme);
  padding: 0.5rem 0 1rem 0;
}
.projects .projects__container .project__box .project__box-tags {
  /* background: red; */
  margin: 1rem 0;
}
.projects .projects__container .project__box .project__box-tags span {
  color: var(--color-primary);
  font-size: 1.5rem;
  border: var(--border-dark-light);
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  margin-right: 0.25rem;
}
.projects .projects__container .project__box .project__box-buttons {
  display: flex;
  justify-content: center;
  margin: 0.5rem auto;
}
.fade-in {
  animation: fadeInAnimation 0.6s ease-in-out;
}
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
    transform: translateY(1.2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes loadingwave {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15px);
  }
}

/* animation sections */
@keyframes showSection {
  from {
    opacity: 0;
    scale: 25%;
  }
  to {
    opacity: 1;
    scale: 100%;
  }
}


/* media queries */
@media (max-width: 1199px) {
  html {
    font-size: 58%;
  }
  .home h1 {
    font-size: 12rem;
    -webkit-text-stroke: 0.4rem var(--color-primary);
  }
}

@media (max-width: 991px) {
  html {
    font-size: 55%;
  }
  body {
    padding-left: 0;
  }
  .sidebar {
    left: -110%;
  }
  .sidebar.active {
    left: 1%;
    transition: 0.4s linear;
  }
  #btn-menu {
    display: initial;
  }
  .home h1 {
    font-size: 10rem;
    -webkit-text-stroke: 0.3rem var(--color-primary);
  }
}
@media (max-width: 575px) {
  html {
    font-size: 53%;
  }
  .home h1 {
    font-size: 8rem;
    -webkit-text-stroke: 0.2rem var(--color-primary);
  }
  .projects .projects__filter .btn-primary {
    padding: 1rem;
  }
}
@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
  .sidebar {
    width: 97%;
    margin: auto;
  }
  home h1 {
    font-size: 7rem;
    -webkit-text-stroke: 0.1rem var(--color-primary);
  }
}
@media (max-width: 380px) {
  html {
    font-size: 48%;
  }
  home h1 {
    font-size: 6rem;
  }
}
// index.html
<body>
  <!-- SIDEBAR/HEADER - STARTS -->
  <div class="sidebar">
    <div class="sidebar__user">
      <img src="./public/assets/imgs/profile.jpeg" class="user__image" alt="Pool Petter Hijuela - popehiflo">
      <p class="user__text">Pool Petter Hijuela Florian</p>
      <p class="user__text">aka</p>
      <p class="user__name">popehiflo</p>
      <p class="user__text">Desarrollador de Software</p>
    </div>
    <nav class="sidebar__menu">
      <a href="#home" class="btn-primary">inicio</a>
      <a href="#about" class="btn-primary">acerca de mi</a>
      <a href="#projects" class="btn-primary">mis trabajos</a>
      <a href="#experience" class="btn-primary">experiencia</a>
      <a href="#contact" class="btn-primary">contacto</a>
      <a href="#blogs" class="btn-primary">blog</a>
    </nav>
    <div class="sidebar___social-media">
      <a href="https://github.com/popehiflo" class="btn-primary-icon fab fa-github" target="_blank"></a>
      <a href="https://linkedin.com/in/popehiflo/" class="btn-primary-icon fab fa-linkedin" target="_blank"></a>
      <a href="https://www.youtube.com/@popehiflo/videos" class="btn-primary-icon fab fa-youtube" target="_blank"></a>
      <a href="https://twitter.com/popehiflo" class="btn-primary-icon fab fa-twitter" target="_blank"></a>
    </div>
  </div>
  <!-- SIDEBAR/HEADER - ENDS -->
  <!-- BUTTONS STARTS -->
  <!-- button show/hide menu -->
  <button type="button" id="btn-menu" class="btn-primary-icon" aria-label="Menú">
    <i class="fas fa-bars"></i>
  </button>
  <!-- button theme toggler -->
  <button type="button" id="btn-theme-toggler" class="btn-primary-icon" aria-label="Cambiar tema">
    <i class="fas fa-sun"></i>
  </button>
  <!-- BUTTONS ENDS -->
  <!-- #HOME - STARTS -->
  <section class="home" id="home">
    <h3>¡Hola! 👋 soy</h3>
    <h2 class="heading"><span>Pool Petter Hijuela Florian</span></h2>
    <p>también conocido como</p>
    <h1>popehiflo</h1>
    <p>Desarrollador de Software</p>
    <div class="home__social-media">
      <a href="https://github.com/popehiflo" class="btn-primary-icon fab fa-github" target="_blank"></a>
      <a href="https://linkedin.com/in/popehiflo/" class="btn-primary-icon fab fa-linkedin" target="_blank"></a>
      <a href="https://www.youtube.com/@popehiflo/videos" class="btn-primary-icon fab fa-youtube" target="_blank"></a>
      <a href="https://twitter.com/popehiflo" class="btn-primary-icon fab fa-twitter" target="_blank"></a>
    </div>
  </section>
  <!-- #HOME - ENDS -->
  <!-- #ABOUT - STARTS -->
  <section class="about" id="about">
    <h1 class="heading"><span>Acerca</span> de mi</h1>
    <div class="about__row">
      <div class="row__exp">
        <div class="box">
          <p id="greeting">hola</p>
          <h3>
            <span data-time="hours">00</span>
            <span>:</span>
            <span data-time="minutes">00</span>
            <span>:</span>
            <span data-time="seconds">00</span>
          </h3>
        </div>
        <div class="box">
          <p>vivo en</p>
          <h3>Perú</h3>
        </div>
        <div class="box">
          <p>años experiencia</p>
          <h3>2+</h3>
        </div>
        <div class="box">
          <p>proyectos reales</p>
          <h3>3+</h3>
        </div>
      </div>
      <div class="row__content">
        <h3>Mi nombre es <span>Pool</span></h3>
        <p>
          Tengo más de 2 años de experiencia trabajando como desarrollador backend con Java/Python.
          Actualmente estoy desarrollando y modernizando mis habilidades como Fullstack Developer. En
          estos momentos me ilusiona un proyecto en el que pueda aportar valor y crecer profesionalmente.
          Estoy abierto a nuevas oportunidades.
        </p>
        <a href="https://t.me/popehiflo" class="btn-primary" target="_blank">Contáctame</a>
      </div>
    </div>
    <div class="about__row">
      <div class="row__progress">
        <h3> HTML <span>70%</span></h3>
        <div class="bar bar-1-1"><span></span></div>
        <h3> CSS <span>60%</span> </h3>
        <div class="bar bar-1-2"><span></span></div>
        <h3> JavaScript <span>75%</span> </h3>
        <div class="bar bar-1-3"><span></span></div>
        <h3> TypeScript <span>75%</span> </h3>
        <div class="bar bar-1-4"><span></span></div>
        <h3> React JS <span>65%</span> </h3>
        <div class="bar bar-1-5"><span></span></div>
        <h3> Angular <span>65%</span> </h3>
        <div class="bar bar-1-6"><span></span></div>
      </div>
      <div class="row__progress">
        <h3> NodeJS <span>70%</span> </h3>
        <div class="bar bar-2-1"><span></span></div>
        <h3> Express <span>65%</span> </h3>
        <div class="bar bar-2-2"><span></span></div>
        <h3> MongoDB <span>70%</span> </h3>
        <div class="bar bar-2-3"><span></span></div>
        <h3> Java <span>80%</span> </h3>
        <div class="bar bar-2-4"><span></span></div>
        <h3> SpringBoot <span>70%</span> </h3>
        <div class="bar bar-2-5"><span></span></div>
        <h3> MySQL <span>70%</span> </h3>
        <div class="bar bar-2-6"><span></span></div>
      </div>
    </div>
  </section>
  <!-- #ABOUT - ENDS -->
  <!-- #PROJECTS - STARTS -->
  <section class="projects" id="projects">
    <h1 class="heading"><span>Algunos</span> proyectos</h1>
    <div class="projects__filter">
      <input type="radio" checked="true" id="all" name="projects">
      <label for="all" class="btn-primary">Todos<span class="project-amount">1</span></label>
      <input type="radio" id="front" name="projects">
      <label for="front" class="btn-primary">Frontend<span class="project-amount">1</span></label>
      <input type="radio" id="back" name="projects">
      <label for="back" class="btn-primary">Backend<span class="project-amount">0</span></label>
    </div>
    <div class="projects__container">
      <div class="project__box">
        <div class="project__box-image">
          <img src="./public/assets/imgs/img-portfolio.png" alt=""
            srcset=""
            sizes=""
          />
        </div>
        <div class="project__box-details">
          <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit neque doloremque, commodi impedit nulla sint modi quibusdam autem accusamus eum.</p>
        </div>
        <h3 class="title">proyecto X</h3>
        <div class="project__box-buttons">
          <a href="https://github.com/popehiflo" class="btn-primary-icon fab fa-github" target="_blank"></a>
          <a href="https://linkedin.com/in/popehiflo/" class="btn-primary-icon fab fa-linkedin" target="_blank"></a>
          <a href="https://www.youtube.com/@popehiflo/videos" class="btn-primary-icon fab fa-youtube" target="_blank"></a>
        </div>
      </div>
      </div>
    </div>
  </section>
  <!-- #PROJECTS - ENDS -->
  <!-- FOOTER - STARTS -->
  <footer class="footer">
  </footer>
  <!-- FOOTER - ENDS -->
  <!-- LOADER - STARTS -->
  <div class="loader__container">
    <div class="loader">
      <span>p</span>
      <span>o</span>
      <span>p</span>
      <span>e</span>
      <span>h</span>
      <span>i</span>
      <span>f</span>
      <span>l</span>
      <span>o</span>
    </div>
  </div>
  <!-- LOADER - ENDS -->
  <!-- MAIN SCRIPT JS -->
  <script src="./src/index.js" type="module"></script>
</body>
// src/index.js
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

// projects-section.js
import { allProjects as myProjects } from '../data/MOCKDATA.js';

// Projects Section
function populateProjects(projectList) {
  let projectsContainer = document.querySelector('.projects__container');
  projectsContainer.textContent = "";

  // Run a loop througgh the projects and create an HTML element ("project__box") for each project
  projectList.forEach((project, index) => {
    // create the HTML element for each project
    let projectBox = document.createElement("div");
    projectBox.classList.add("project__box", "fade-in");
    // create the project image wrapper
    let projectImage = document.createElement("div");
    projectImage.classList.add("project__box-image");
    // create the project image
    let image = document.createElement("img");
    image.src = project.image;
    image.alt = project.title;

    // calculate the appropriate image size based on screen width
    let screenWidth = window.innerWidth;
    //let imageSizes = `(max-width: 575px) 100vw, (max-width: 991px) 50vw, 25vw`;
    //image.sizes = imageSizes;

    // Create the srcset attribute for different image resolutions
    let imageSrcset = `${project.image} 1280w, 
      ${project.image.replace('.png', '-medium.png')} 992w, 
      ${project.image.replace('.png', '-small.png')} 576w`;
    image.srcset = imageSrcset;

    // create the project box details
    let projectBoxDetails = document.createElement("div");
    projectBoxDetails.classList.add("project__box-details");
    // create the project box description
    let detailsDescription = document.createElement("p");
    detailsDescription.classList.add("description");
    detailsDescription.textContent = project.description.substring(0, 70) + "...";
    // loop for tags of project if exists
    let projectTags = document.createElement("div");
    projectTags.classList.add("project__box-tags");
    // create the project tags
    for (let prop in project.tags) {
      let tag = document.createElement("span");
      tag.textContent = project.tags[prop];
      projectTags.append(tag);
    };
    // create the project box title
    let projectTitle = document.createElement("h3");
    projectTitle.classList.add("title");
    projectTitle.textContent = project.title;

    // create the project box buttons
    let projectBoxButtons = document.createElement("div");
    projectBoxButtons.classList.add("project__box-buttons");
    // create a link foreach prop in object links
    for (let prop in project.links) {
      let projectButton = document.createElement("a");
      projectButton.href = project.links[prop];
      let iconFA = `fa-${prop}`;
      projectButton.classList.add("fab", iconFA, "btn-primary-icon");
      projectButton.target = "_blank";
      projectBoxButtons.append(projectButton);
    }


    projectImage.append(image);
    // append elements to the project box details
    projectBoxDetails.append(detailsDescription);
    // append elements to the project box
    projectBox.append(projectImage);
    projectBox.append(projectBoxDetails);
    projectBox.append(projectTags);
    projectBox.append(projectTitle);
    projectBox.append(projectBoxButtons);

    // Add complete individual project box to the project section
    projectsContainer.append(projectBox);
  });
};

function projectsHandler() {

  let frontProjects = myProjects.filter(project => project.category.id === "frontend");
  let backProjects = myProjects.filter(project => project.category.id === "backend");

  populateProjects(myProjects);

  document.querySelector('.projects__filter label[for=all] span.project-amount').textContent = myProjects.length;
  document.querySelector('.projects__filter label[for=front] span.project-amount').textContent = frontProjects.length;
  document.querySelector('.projects__filter label[for=back] span.project-amount').textContent = backProjects.length;

  let projectsFilter = document.querySelector('.projects__filter');

  projectsFilter.addEventListener('click', (e) => {
    if (e.target.id === "all") {
      populateProjects(myProjects);
    } else if (e.target.id === "front") {
      populateProjects(frontProjects);
    } else if (e.target.id === "back") {
      populateProjects(backProjects);
    }
  });
};

export { projectsHandler };
