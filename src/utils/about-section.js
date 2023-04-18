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

export { greetingHandler, clockHandler };
