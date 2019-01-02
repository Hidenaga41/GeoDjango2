///test

//--------- OSM ------------
// OSM Japan
var osmjp = L.tileLayer('http://tile.openstreetmap.jp/{z}/{x}/{y}.png',
    { id: 'osmmapjp', attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' });

// OSM本家
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { id: 'osmmap', attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' });

var baseMaps = {
    "地理院地図 標準地図": std,
    "地理院地図 淡色地図": pale,
    "OSM": osm,
    "OSM japan": osmjp
};

// 初期画面の設定（paleで小石川四丁目バス停を設定）
var map = L.map('map', { layers: [osmjp] });
map.setView([35.7144586, 139.7389593], 12);

var marker = L.marker([35.7144586, 139.7389593,]).addTo(map);
marker.bindPopup("<b>koishikawa busstop</b> to-02 kinshicho station from otsuka station").openPopup();


// コントロールはオープンにする
L.control.layers(baseMaps, null, { collapsed: false }).addTo(map);

//スケールコントロールを追加（オプションはフィート単位を非表示）
L.control.scale({ imperial: false }).addTo(map);
