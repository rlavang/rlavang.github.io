

var map = L.map('map').setView([43.49, 20.35], 3);
L.tileLayer('http://{s}.tiles.mapbox.com/v3/ramo.j2c7ggdg/{z}/{x}/{y}.png', { attribution: 'Map data &copy; <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 18}).addTo(map);

coords = []; //define an array to store coordinates
var rand = L.geoJson (earthquakes, {
   onEachFeature: function (feature, layer) {
             popupOptions = {maxWidth: 200};
            layer.bindPopup(feature.properties.popupContent);
            coords.push([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]);
}});

var heat = L.heatLayer(coords,{radius: 27, maxZoom: 10, max:0.3, blur: 30}).addTo(map);
