// About Section
function greetingHandler() {
  let greetingText;
  let currentHour = new Date().getHours();

  if (currentHour < 12) {
    greetingText = "¡Buenos días!"
  } else if (currentHour < 18) {
    greetingText = "¡Buenas tardes!"
  } else if (currentHour < 24) {
    greetingText = "¡Buenas noches!"
  } else {
    greetingText = "¡Bienvenido!"
  }

  document.querySelector('#greeting').innerHTML = greetingText;
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
