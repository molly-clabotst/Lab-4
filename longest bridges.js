let areaCoord = [41.8, -98];
let map = L.map("long-bridge-map").setView(areaCoord, 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
attribution: 'Map data &copy; <a     href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibW9sbHlkZXZkb3QiLCJhIjoiY2pzNWJucDZjMGUzdjQ0bzdmMnVwaHgxMCJ9.fRp9Lg8R5UAZ8clmrGmG5Q'
}).addTo(map);

let verraNarrowsCoord = [40.6066,-74.0447]
let verraNarMarker = L.marker(verraNarrowsCoord).bindPopup("Verrazano-Narrows Bridge<br><a href='https://en.wikipedia.org/wiki/Verrazzano-Narrows_Bridge'>Website</a>").addTo(map);
let goldGateCoord = [37.8199,-122.4783]
let goldMarker = L.marker(goldGateCoord).bindPopup("Golden Gate Bridge<br><a href='http://goldengatebridge.org/'>Website</a>").addTo(map);
let mackCoord = [45.8174,-84.7278]
let mackMarker = L.marker(mackCoord).bindPopup("Mackinac Bridge<br><a href='https://www.mackinacbridge.org/'>Website</a>").addTo(map);
let georgeCoord = [40.8517,-73.9527]
let georgeMarker= L.marker(georgeCoord).bindPopup("George Washington Bridge<br><a href='https://en.wikipedia.org/wiki/George_Washington_Bridge'>Website</a>").addTo(map);
let tacoCoord = [47.2690,-122.5517]
let tacoMarker = L.marker(tacoCoord).bindPopup("Tacoma Narrows Bridge<br><a href='https://en.wikipedia.org/wiki/Tacoma_Narrows_Bridge'>Website</a>").addTo(map);

