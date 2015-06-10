L.mapbox.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImdQMzI4WjgifQ.d-Uyr7NBjrJVz9z82uk5Xg';

var map = L.mapbox.map('map', 'mapbox.light', { zoomControl: false, attributionControl: false });
//map.scrollWheelZoom.disable();
//var raceRoute = L.mapbox.featureLayer().addTo(map);
var confVenues = L.mapbox.featureLayer().addTo(map);
confVenues.loadURL('/assets/map.geojson')
    .on('ready', done);

function done() {

map.fitBounds(confVenues.getBounds());

confVenues.eachLayer(function(marker) {
        
        if (marker.feature.properties.title === 'Conference Venue - Crown Plaza Hotel') {
            marker.openPopup();
        }
    });

}
