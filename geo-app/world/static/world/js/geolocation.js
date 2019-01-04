import Leaflet from 'leaflet'
//import '../css/app.css';
//import 'leaflet/dist/leaflet.css';
import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { MapsLocalShipping } from 'material-ui/svg-icons';


// Import the package
import LocateControl from 'react-leaflet-locate-control'

// Setup LocateControl options
const locateOptions = {
    position: 'topright',
    strings: {
        title: 'Show me where I am, yo!'
    },
    onActivate: () => { } // callback before engine starts retrieving locations
}

// Inside your <Map> component add LocateControl



class LocateApp extends Component {

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

                    <LocateControl options={locateOptions} startDirectly />



                </Map>
            </div>
        );
    }
}
export default LocateApp;
