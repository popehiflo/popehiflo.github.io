import { allProjects as myProjects } from '../data/MOCKDATA.js';

// Projects Section
function populateProjects(projectList) {
  let projectsContainer = document.querySelector('.projects__container');
  projectsContainer.textContent = "";

  // Run a loop througgh the projects and create an HTML element ("project__box") for each project
  projectList.forEach((project, index) => {
    // create the HTML element for each project
    let projectBox = document.createElement("div");
    projectBox.classList.add("project__box");
    // create the project image wrapper
    let projectImage = document.createElement("div");
    projectImage.classList.add("project__box-image");
    // create the project image
    let image = document.createElement("img");
    image.src = project.image;
    image.alt = project.title;

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
