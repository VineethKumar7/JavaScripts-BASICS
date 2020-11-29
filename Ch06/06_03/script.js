(function() {
  "use strict";

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("body").classList.add("js");

    var zipField = document.getElementById("billing_postcode"),
      cityField = document.getElementById("billing_city"),
      stateField = document.getElementById("billing_state");

    zipField.addEventListener("blur", function queryPostalCode() {
      var zipCode = parseInt(zipField.value, 10);
      if (zipCode <= 0 || zipCode > 99999) return;

      // making the query

      cityField.parentNode.parentNode.style.display = "block";
      stateField.parentNode.parentNode.style.display = "block";
    });
  });
})();
