import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';
import Children from "./children"
import { connect } from "react-redux";
import Medical from './containers/Medical'



const MyPopupMarker = ({ children, position }) => (
    <Marker position={position}>
        <Popup>{children}</Popup>
    </Marker>
)

const MyMarkersList = ({ markers }) => {
    const items = markers.map(({ key, position, children }) => (
        <MyPopupMarker key={key} position={position} children={children} />
    ))
    return <div style={{ display: 'none' }}>{items}</div>
}


const startRequest = medical => ({
    type: 'POINT',
    payload: { id }
})

const BusRouteId = medical => ({
    id: "odpt: odpt.BusroutePattern: Toei.To02.32304.2",
    name: "to02"
})




class ListApp extends Component {
    constructor() {
        super()
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13,
        }
    }

    mapClick(e) {
        this.props.dispatch(setPoint)
    }



    render() {
        const center = [this.state.lat, this.state.lng]

        const markers = [
            { key: 'marker1', position: [51.5, -0.1], children: 'My first popup' },
            { key: 'marker2', position: [51.51, -0.1], children: 'My second popup' },
            { key: 'marker3', position: [51.49, -0.05], children: < Children /> },
        ]
        return (
            <Map center={center} zoom={this.state.zoom} >
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MyMarkersList markers={markers} />
                <GeoJSON />
            </Map>
        )
    }
}
export default ListApp;