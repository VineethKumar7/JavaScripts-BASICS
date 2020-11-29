var bMapAPIKey = "YOUR_API_KEY";

var map;
function initMap() {
  "use strict";

  var storeLocation = new Microsoft.Maps.Location(34.10309, -118.326493);

  map = new Microsoft.Maps.Map("#hplus-map", {
    credentials: bMapAPIKey,
    center: storeLocation,
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 14,
    disableScrollWheelZoom: true,
    disablePanning: true
  });

  var pin = new Microsoft.Maps.Pushpin(storeLocation, {
    title: "H+ Sport in Hollywood",
    subTitle: "(Actually Capitol Records)"
  });

  //Add the pushpin to the map
  map.entities.push(pin);
}
