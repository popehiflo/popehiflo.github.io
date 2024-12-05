import { allProjects as myProjects } from '../data/MOCKDATA.js';

// Projects Section
function populateProjects(projectList) {
  let projectsContainer = document.querySelector('.projects__container');
  projectsContainer.innerHTML = '';

  // Run a loop througgh the projects and create an HTML element ("project__box") for each project
  projectList.forEach((project, index) => {
    const projectBox = createProjectElement(project);
    // Add complete individual project box to the project section
    projectsContainer.appendChild(projectBox);
  });
};

function createProjectElement(project) {
  // create the HTML element for each project
  const projectBox = document.createElement('div');
  projectBox.classList.add('project__box', 'fade-in');

  // Imagen con multiples resoluciones
  const projectImage = createProjectImage(project);

  // Detalles del proyecto
  const projectDetails = createProjectDetails(project);

   // Tags
  const projectTags = createProjectTags(project);
  
  // Título
  const projectTitle = createProjectTitle(project);
  
  // Botones
  const projectButtons = createProjectButtons(project);

  projectBox.append(projectImage, projectDetails, projectTags, projectTitle, projectButtons);
  
  return projectBox;
};

// Funciones auxiliares para crear cada parte del proyecto
function createProjectImage(project) {
  // create the project image wrapper
  const projectImage = document.createElement('div');
  projectImage.classList.add('project__box-image');
  // create the project image
  const image = document.createElement('img');
  image.src = project.image;
  image.alt = project.title;
  image.loading = 'lazy';
  
  // TODO: Configuración de imágenes responsivas 1280w, 992w, 576w
  // Eliminar srcset y sizes para usar solo la imagen original
  image.removeAttribute('srcset');
  image.removeAttribute('sizes');

  projectImage.appendChild(image);
  return projectImage;
};

function createProjectDetails(project) {
  // create the project box details
  const projectDetails = document.createElement('div');
  projectDetails.classList.add('project__box-details');
  // create the project box description
  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = project.description.substring(0, 150) + '...';
  
  projectDetails.appendChild(description);
  return projectDetails;
};

function createProjectTags(project) {
  const projectTags = document.createElement('div');
  projectTags.classList.add('project__box-tags');

  // Verificar si hay tags antes de crear elementos
  if (project.tags && Object.keys(project.tags).length > 0) {
    Object.values(project.tags).forEach(tagName => {
      const tag = document.createElement('span');
      tag.textContent = tagName;
      projectTags.appendChild(tag);
    });
  }

  return projectTags;
};

function createProjectTitle(project) {
  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('title');
  projectTitle.textContent = project.title;
  return projectTitle;
};

function createProjectButtons(project) {
  const projectBoxButtons = document.createElement('div');
  projectBoxButtons.classList.add('project__box-buttons');

  // Verificar si hay links antes de crear botones
  if (project.links && Object.keys(project.links).length > 0) {
    Object.entries(project.links).forEach(([key, url]) => {
      const projectButton = document.createElement('a');
      projectButton.href = url;
      
      // Mapeo de iconos
      const iconMap = {
        'github': 'fa-github',
        'google': 'fa-google',
        'youtube': 'fa-youtube',
        'linkedin': 'fa-linkedin'
      };

      const iconClass = iconMap[key] || 'fa-link';
      projectButton.classList.add('fab', iconClass, 'btn-primary-icon');
      projectButton.target = '_blank';
      
      // Añadir aria-label para accesibilidad
      projectButton.setAttribute('aria-label', `Ver ${key}`);

      projectBoxButtons.appendChild(projectButton);
    });
  }

  return projectBoxButtons;
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
