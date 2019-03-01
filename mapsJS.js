let metroAreaCenterCoordinates = [44.96, -93.2];
let map = L.map('mctc-map').setView(metroAreaCenterCoordinates, 9);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a     href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibW9sbHlkZXZkb3QiLCJhIjoiY2pzNWJucDZjMGUzdjQ0bzdmMnVwaHgxMCJ9.fRp9Lg8R5UAZ8clmrGmG5Q'
}).addTo(map);

let mctcCoordinates = [44.9724, -93.2844];
let mctcMarker = L.marker(mctcCoordinates).bindPopup("Minneapolis College<br>" +
    "<a href='https://minneapolis.edu'>Website</a>").addTo(map);

let stPaulCoordinates = [44.94839, -93.1099];
let stpMarker = L.marker(stPaulCoordinates).bindPopup("Saint Paul College<br><a " +
    "href='https://saintpaul.edu'>Website</a>").addTo(map);

let normCoordinates = [44.8297, -93.3312];
let normMarker = L.marker(normCoordinates).bindPopup("Normandale Community College" +
    "<br><a href='https://normandale.edu/'>Website</a>").addTo(map);

var metroAreaCircle = L.circle(metroAreaCenterCoordinates,{
    color: 'green',
    radius: 30000,
    fillOpacity: 0.2
}).bindPopup("Twin Cities Metro Area").addTo(map);