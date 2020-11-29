(function() {
  "use strict";

  document
    .getElementById("cart-hplus")
    .addEventListener("submit", estimateTotal);

  function estimateTotal(event) {
    event.preventDefault();

    var state = document.getElementById("s-state");

    if (state.value === "") {
      alert("Please choose your shipping state");

      state.focus();

      return;
    }
  }
})();
