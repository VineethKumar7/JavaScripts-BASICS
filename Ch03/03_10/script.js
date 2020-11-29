(function() {
  "use strict";

  document.addEventListener("DOMContentLoaded", function() {
    var state = document.getElementById("s-state");

    document
      .getElementById("cart-hplus")
      .addEventListener("submit", estimateTotal);

    var btnEstimate = document.getElementById("btn-estimate");

    // Extra credit - fix the behavior of the toggle estimate button
    toggleEstimate();

    state.addEventListener("change", toggleEstimate);

    function toggleEstimate() {
      if (state.value === "") {
        btnEstimate.disabled = true;
      } else {
        btnEstimate.disabled = false;
      }
    }

    function estimateTotal(event) {
      event.preventDefault();

      if (state.value === "") {
        alert("Please choose your shipping state.");

        state.focus();

        return;
      }

      var itemBball =
          parseInt(document.getElementById("txt-q-bball").value, 10) || 0,
        itemJersey =
          parseInt(document.getElementById("txt-q-jersey").value, 10) || 0,
        itemPower =
          parseInt(document.getElementById("txt-q-power").value, 10) || 0,
        itemWater =
          parseInt(document.getElementById("txt-q-water").value, 10) || 0,
        shippingState = state.value,
        shippingMethod =
          document.querySelector("[name=r_method]:checked").value || "";

      var totalQty = itemBball + itemJersey + itemPower + itemWater,
        shippingCostPer,
        shippingCost,
        taxFactor = 1,
        estimate,
        totalItemPrice =
          90 * itemBball + 25 * itemJersey + 30 * itemPower + 4 * itemWater;

      if (shippingState === "CA") {
        taxFactor = 1.075;
      } else if (shippingState === "WA") {
        taxFactor = 1.065;
      }

      switch (shippingMethod) {
        case "usps":
          shippingCostPer = 2;
          break;
        case "ups":
          shippingCostPer = 3;
          break;
        default:
          shippingCostPer = 0;
          break;
      }

      shippingCost = shippingCostPer * totalQty;

      estimate = "$" + (totalItemPrice * taxFactor + shippingCost).toFixed(2);

      document.getElementById("txt-estimate").value = estimate;

      var results = document.getElementById("results");

      results.innerHTML = "Total items: " + totalQty + "<br>";
      results.innerHTML +=
        "Total shipping: $" + shippingCost.toFixed(2) + "<br>";
      results.innerHTML +=
        "Tax: " +
        ((taxFactor - 1) * 100).toFixed(2) +
        "% (" +
        shippingState +
        ")";
    }
  });
})();
