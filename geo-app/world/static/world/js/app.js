//import '../css/app.css';
//import 'leaflet/dist/leaflet.css';
import React, { Component } from 'react'
//import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { MapsLocalShipping } from 'material-ui/svg-icons';
import { render } from 'react-dom'
import ListApp from './listapp'
import LocateApp from './geolocation'
//import Leaflet from 'leaflet'
//import './world/css/app.css';
//import 'leaflet/dist/leaflet.css';
//import logger from 'redux-logger';
//import { Provider } from 'react-redux';
//import * as reducers from './reducers';
import { ConnectedRouter } from 'react-router-redux';
import { createBrouserHistory } from 'history/createBrowserHistory';
import createStore from './createStore';

import { Route, Link } from 'react-router-dom';
import Med from './components/Medical'

// Import the package
import LocateControl from 'react-leaflet-locate-control'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { message: 'something' }
    }

    onChange(e) {
        this.setState({ message: e.target.value })
    }

    render() {
        return (
            <div  >
                <ul>
                    <li>all </li>
                </ul>
                <input type="text" onChange={this.onChange.bind(this)} />
                <p>{this.state.message}</p>
                <div>
                    <ListApp />
                </div>
            </div>
        )
    }
}
export default App;
