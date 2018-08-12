//Locate images used in map
//L.Icon.Default.imagePath = 'packages/mrt:leaflet/images'
//Set base map
var osm = L.tileLayer('http://{s}.tiles.mapbox.com/v3/ramo.j2c7ggdg/{z}/{x}/{y}.png', {
    maxZoom: 18, attribution: 'Map data &copy; <a href="http://mapbox.com">Mapbox</a>'});

//API Key
OWM_Key = '672161c6d91ae44ea5b3a11aea11afbd';

//Set different layers
var clouds = L.OWM.clouds({opacity: 0.7, appId: OWM_Key});
var city = L.OWM.current({minZoom: 6, intervall: 15, lang: 'en', imageLoadingUrl:('./images/owmloading.gif'), appId: OWM_Key});
var precipitation = L.OWM.precipitation({opacity: 0.7, appId: OWM_Key} );
var precipitationcls = L.OWM.precipitationClassic({opacity: 0.6, appId: OWM_Key} );
var rain = L.OWM.rain({opacity: 0.7, appId: OWM_Key} );
var raincls = L.OWM.rainClassic ({appId: OWM_Key});
var pressure = L.OWM.pressure({opacity: 0.5, appId: OWM_Key});
var snow = L.OWM.snow ({appId: OWM_Key});
var pressurecntr = L.OWM.pressureContour ({appId: OWM_Key});
var temp = L.OWM.temperature ({opacity: 0.5, appId: OWM_Key});
var wind = L.OWM.wind ({opacity: 0.5, appId: OWM_Key});

var map = L.map('map', {center: new L.LatLng(51.5, 10), zoom: 3, layers: [osm] });
var baseMaps = { "OSM Standard": osm };
var overlayMaps = { "City Forecast (min zoom 6)": city, "Clouds": clouds, "Precipitation": precipitation, "Precipitation (Classic)": precipitationcls, "Rain": rain, "Rain (Classic)": raincls, "Snow": snow, "Pressure": pressure, "Pressure Contour": pressurecntr, "Temperature": temp, "Wind": wind};
var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

