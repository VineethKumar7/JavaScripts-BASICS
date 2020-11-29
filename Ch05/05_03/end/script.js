var bMapAPIKey = "YOUR_API_KEY";

function initMap() {
  "use strict";

  var map = new Microsoft.Maps.Map("#hplus-map", {
    // credentials: 'Your Bing Maps Key',
    center: new Microsoft.Maps.Location(34.10309, -118.326493),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 10
  });
}
