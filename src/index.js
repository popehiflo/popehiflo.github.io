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

// About Section
function greetingHandler() {
  let grettingText;
  let currentHour = new Date().getHours();

  if (currentHour < 12) {
    grettingText = "¡Buenos diás!"
  } else if (currentHour < 18) {
    grettingText = "¡Buenas tardes!"
  } else if (currentHour < 24) {
    grettingText = "¡Buenas noches!"
  } else {
    grettingText = "¡Bienvenido!"
  }

  document.querySelector('#greeting').innerHTML = grettingText;
}

function clockHandler() {
  setInterval(() => {
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, '0');
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, '0');
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, '0');
  }, 1000);
}

menuToogleHandler();
greetingHandler();
clockHandler();
