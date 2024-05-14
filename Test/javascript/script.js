// Establecer la fecha de finalización del contador
// var countDownDate = new Date("July 31, 2023 23:59:59").getTime();

// Actualizar el contador cada segundo
var countdownTimer = setInterval(function() {

  // Obtener la fecha y hora actual
  var now = new Date().getTime();

  // Calcular la diferencia de tiempo entre la fecha de finalización y la fecha actual
  var timeRemaining = countDownDate - now;

  // Calcular días, horas, minutos y segundos restantes
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Mostrar el resultado en el elemento con el id "countdown"
  var countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Si el contador termina, mostrar un mensaje
  if (timeRemaining < 0) {
    clearInterval(countdownTimer);
    countdownElement.innerHTML = "¡El contador ha terminado!";
  }
}, 1000);
