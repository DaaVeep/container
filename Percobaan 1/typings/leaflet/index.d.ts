/// <reference path="typings/index.d.ts" />

var map = L.map('map', {
    center: [106.785564, -6.57677],
    zoom: 4
});

var basemap = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=CdTG8VoBf7lJOQLKbcON', {
    attribution : '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
});

basemap.addTo(map);