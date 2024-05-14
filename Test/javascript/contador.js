$(document).ready(function() {
  var finalDate = new Date("2023-07-01T00:00:00"); // Establece aquí la fecha final deseada

  $('.countdown').final_countdown({
    start: Date.now(),
    end: finalDate.getTime(),
    now: Date.now(),
  });
});
