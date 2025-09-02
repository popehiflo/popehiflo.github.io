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

  // Badge de categoria
  const categoryBadge = document.createElement('div');
  categoryBadge.classList.add('project-category');
  categoryBadge.textContent = (project.category.name).toLowerCase();

  // Imagen con multiples resoluciones
  const projectImage = createProjectImage(project);
  projectImage.prepend(categoryBadge);

  // Detalles del proyecto (para el hover)
  const projectDetails = createProjectDetails(project);

   // Tags
  const projectTags = createProjectTags(project);
  
  // Título
  const projectTitle = createProjectTitle(project);
  
  // Botones de links
  const projectButtons = createProjectButtons(project);

  // Botón para abrir el modal
  const modalButton = document.createElement('a');
  modalButton.classList.add('btn-primary', 'btn-details');
  modalButton.textContent = 'Detalles';
  modalButton.style.marginLeft = 'auto'; // Aligns this button to the right
  modalButton.addEventListener('click', () => {
    showProjectModal(project);
  });

  projectButtons.appendChild(modalButton);

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
  // Use summary field for hover
  description.textContent = project.summary;
  
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
      
      const iconMap = {
        'github': 'fa-github',
        'google': 'fa-google',
        'youtube': 'fa-youtube',
        'linkedin': 'fa-linkedin'
      };

      const iconClass = iconMap[key] || 'fa-link';
      projectButton.classList.add('fab', iconClass, 'btn-primary-icon');
      projectButton.target = '_blank';
      
      projectButton.setAttribute('aria-label', `Ver ${key}`);

      projectBoxButtons.appendChild(projectButton);
    });
  }

  return projectBoxButtons;
};

function showProjectModal(project) {
  const existingModal = document.querySelector('.project-detail-modal');
  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement('div');
  modal.className = 'project-detail-modal';

  let tagsHTML = '';
  if (project.tags && Object.keys(project.tags).length > 0) {
    tagsHTML = Object.values(project.tags).map(tag => `<span>${tag}</span>`).join('');
  }

  let buttonsHTML = '';
  if (project.links && Object.keys(project.links).length > 0) {
    const iconMap = {
      'github': 'fa-github',
      'google': 'fa-google',
      'youtube': 'fa-youtube',
      'linkedin': 'fa-linkedin'
    };
    buttonsHTML = Object.entries(project.links).map(([key, url]) => {
      const iconClass = iconMap[key] || 'fa-link';
      return `<a href="${url}" target="_blank" class="btn-primary-icon fab ${iconClass}" aria-label="Visitar ${key}"></a>`;
    }).join('');
  }

  modal.innerHTML = `
    <div class="project-modal-content">
      <div class="project-modal-header">
        <h2>${project.title}</h2>
        <i class="fas fa-times project-modal-close"></i>
      </div>
      <div class="project-modal-body">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-modal-tags">${tagsHTML}</div>
        <div class="project-modal-description">${project.description}</div>
        <div class="project-modal-buttons">${buttonsHTML}</div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  const closeModal = () => {
    modal.remove();
    document.body.style.overflow = 'auto';
  };

  modal.querySelector('.project-modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

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