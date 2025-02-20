function themeHandler() {
  const btnTheme = document.querySelector('#btn-theme-toggler');
  const iconBtnTheme = btnTheme.getElementsByTagName('i')[0];
  const body = document.body;

  // Tema oscuro por defecto
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('active');
    iconBtnTheme.classList.replace('fa-sun', 'fa-moon');
  } else {
    // Si no hay tema guardado o es 'dark', usa oscuro como predeterminado
    body.classList.remove('active');
    iconBtnTheme.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  }

  // Evento para cambiar tema
  btnTheme.addEventListener('click', () => {
    body.classList.add('transition-theme'); // Añadir clase para animación
    if (iconBtnTheme.classList.contains('fa-sun')) {
      iconBtnTheme.classList.replace('fa-sun', 'fa-moon');
      body.classList.add('active');
      localStorage.setItem('theme', 'light');
    } else {
      iconBtnTheme.classList.replace('fa-moon', 'fa-sun');
      body.classList.remove('active');
      localStorage.setItem('theme', 'dark');
    }
    // Remover clase de transición después de la animación
    setTimeout(() => body.classList.remove('transition-theme'), 300);
  });
}

export { themeHandler };
