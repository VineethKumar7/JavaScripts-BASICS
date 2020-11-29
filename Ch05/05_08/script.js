var bMapAPIKey = "YOUR_API_KEY";

var map;
function initMap() {
  "use strict";

  var storeLocationHollywood = new Microsoft.Maps.Location(
      34.1031131,
      -118.326343
    ),
    storeLocationChavez = new Microsoft.Maps.Location(
      34.073873,
      -118.24077740000001
    ),
    centerPoint = new Microsoft.Maps.Location(
      34.0937772394951,
      -118.27888622568359
    );

  map = new Microsoft.Maps.Map("#hplus-map", {
    credentials: bMapAPIKey,
    center: centerPoint,
    zoom: 12,
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    disableScrollWheelZoom: true,
    disablePanning: true
  });

  // Create infobox, which is reusable
  var infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
    visible: false
  });

  // Assign the infobox to a map instance.
  infobox.setMap(map);

  // add a pin for the Hollywood location
  var pinHollywood = new Microsoft.Maps.Pushpin(storeLocationHollywood, {
    title: "H+ Sport in Hollywood",
    subTitle: "(actually Capitol Records)"
  });
  Microsoft.Maps.Events.addHandler(pinHollywood, "click", pinClick);

  pinHollywood.metadata = {
    title: "H+ Sport Hollywood",
    description: "1750 Vine St, Los Angeles, CA"
  };

  map.entities.push(pinHollywood);

  // add a pin for the Chavez Ravine location
  var pinChavez = new Microsoft.Maps.Pushpin(storeLocationChavez, {
    title: "H+ Sport in Chavez Ravine",
    subTitle: "(actually Dodger Stadium)"
  });

  Microsoft.Maps.Events.addHandler(pinChavez, "click", pinClick);

  pinChavez.metadata = {
    title: "H+ Sport Chavez Ravine",
    description: "1000 Vin Scully Ave<br>Los Angeles, CA"
  };

  map.entities.push(pinChavez);

  function pinClick(e) {
    //Make sure the infobox has metadata to display.
    if (e.target.metadata) {
      //Set the infobox options with the metadata of the pushpin.
      infobox.setOptions({
        location: e.target.getLocation(),
        title: e.target.metadata.title,
        description: e.target.metadata.description,
        visible: true
      });
    }
  }
}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE
