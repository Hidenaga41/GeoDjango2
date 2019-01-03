import Leaflet from 'leaflet'
//import '../css/app.css';
//import 'leaflet/dist/leaflet.css';
import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { MapsLocalShipping } from 'material-ui/svg-icons';


class MapApp extends Component {

    constructor() {
        super()
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}
export default MapApp;


/*
// 地理院地図　標準地図
var std = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
    { id: 'stdmap', attribution: "<a href='http://portal.cyberjapan.jp/help/termsofuse.html' target='_blank'>国土地理院</a>" })

// 地理院地図　淡色地図
var pale = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
    { id: 'palemap', attribution: "<a href='http://portal.cyberjapan.jp/help/termsofuse.html' target='_blank'>国土地理院</a>" })

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
var map = L.map('map', { layers: [pale] });
map.setView([35.7144586, 139.7389593], 12);

var marker = L.marker([35.7144586, 139.7389593,]).addTo(map);
marker.bindPopup("<b>koishikawa busstop</b> to-02 kinshicho station from otsuka station").openPopup();


// コントロールはオープンにする
L.control.layers(baseMaps, null, { collapsed: false }).addTo(map);

//スケールコントロールを追加（オプションはフィート単位を非表示）
L.control.scale({ imperial: false }).addTo(map);

//* GeoJSONレイヤーを追加
    $.getJSON("/world/geojson/", function (data) {
        L.geoJson(data).addTo(map);
    });



import React, { Component } from 'react';


class MapApp extends Component {

    render() {
        return (
            <div>
                aaaaaaaaaa

            </div>
        )
    }
}
export default MapApp;

*/
