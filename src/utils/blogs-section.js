import { allBlogs } from '../data/MOCKDATA.js';

function populateBlogs() {
  const blogsContainer = document.querySelector('.blogs__container');
  blogsContainer.innerHTML = '';

  allBlogs.forEach(blog => {
    const blogBox = createBlogElement(blog);
    blogsContainer.appendChild(blogBox);
  });
}

function createBlogElement(blog) {
  const blogBox = document.createElement('div');
  blogBox.classList.add('blog__box', 'fade-in');

  blogBox.innerHTML = `
    <div class="box-image">
      <img src="${blog.image}" alt="${blog.title}" loading="lazy">
    </div>
    <div class="box-content">
      <div class="content-icons">
        <a href="#"><i class="fas fa-calendar"></i> ${blog.date}</a>
        <a href="#"><i class="fas fa-user"></i> ${blog.author}</a>
      </div>
      <h3>${blog.title}</h3>
      <p>${blog.summary}</p>
      <button class="btn-primary" data-blog-id="${blog.id}">Leer más</button>
    </div>
  `;

  blogBox.querySelector('.btn-primary').addEventListener('click', () => showBlogModal(blog));
  return blogBox;
}

function showBlogModal(blog) {
  const modal = document.createElement('div');
  modal.classList.add('blog-modal');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-labelledby', 'modal-title');
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close btn-primary-icon" aria-label="Cerrar modal">
        <i class="fas fa-times"></i>
      </button>
      <img src="${blog.image}" alt="${blog.title}" class="modal-image" loading="lazy">
      <div class="modal-body">
        <h2 id="modal-title">${blog.title}</h2>
        <div class="modal-meta">
          <span><i class="fas fa-calendar"></i> ${blog.date}</span>
          <span><i class="fas fa-user"></i> ${blog.author}</span>
        </div>
        <div class="modal-text">${blog.content}</div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.focus();

  // Cerrar modal
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.remove();
  });
}

function blogsHandler() {
  populateBlogs();
}

export { blogsHandler };
