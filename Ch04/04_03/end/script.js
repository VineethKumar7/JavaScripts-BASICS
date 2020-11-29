(function() {
  "use strict";

  document.addEventListener("DOMContentLoaded", function() {
    var c = document.getElementById("current-time");

    setInterval(updateTime, 1000);

    function updateTime() {
      var d = new Date();

      var hours = d.getHours();
      if (hours > 12) {
        hours -= 12;
      }

      var sep = ":";
      if (d.getSeconds() % 2 === 1) sep = " ";

      c.innerHTML = hours + sep + d.getMinutes();
    }
  });
})();
