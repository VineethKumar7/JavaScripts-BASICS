var bMapAPIKey = "YOUR_API_KEY";

var map;
function initMap() {
  "use strict";

  map = new Microsoft.Maps.Map("#hplus-map", {
    credentials: bMapAPIKey,
    center: new Microsoft.Maps.Location(34.10309, -118.326493),
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 14,
    disableScrollWheelZoom: true,
    disablePanning: true
  });
}
