(function() {
  "use strict";

  document.addEventListener("DOMContentLoaded", function() {
    var currentTime = document.getElementById("current-time"),
      currentDate = document.getElementById("current-date");

    setInterval(function() {
      // var dm = moment();
      var d = new Date();
      date.plugin("meridiem");

      var sepClass = "";
      if (d.getSeconds() % 2 === 1) sepClass = "trans";

      var sep = '<span class="' + sepClass + '">:</span>';

      currentTime.innerHTML =
        date.format(d, "h") + sep + date.format(d, "mm AA");
      currentDate.textContent = date.format(d, "MMMM D");
    }, 1000);
  });
})();
