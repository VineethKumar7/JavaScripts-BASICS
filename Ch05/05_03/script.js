var bMapAPIKey = "YOUR_API_KEY";

function initMap() {
  "use strict";

  var map = new Microsoft.Maps.Map("#hplus-map", {
    // credentials: 'Your Bing Maps Key',
    center: new Microsoft.Maps.Location(51.50632, -0.12714),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 10
  });
}
