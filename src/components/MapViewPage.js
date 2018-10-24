// @flow

import React, { createRef, Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

type State = {
  hasLocation: boolean,
  start_coords: {
        lat: number,
        lng: number,
        zoom: number,
    },
    current_coords: {
        lat: number,
        lng: number,
    }
};

export default class MapViewPage extends Component<{}, State> {
  state = {
    hasLocation: false,
    zoom: 15,
    start_coords: {
        lat: 38.045,
        lng: -84.5,
    },
    current_coords: {
        lat: null,
        lng: null,
    },
  };

  mapRef = createRef();

  handleClick = () => {
    const map = this.mapRef.current
    if (map != null) {
        map.leafletElement.locate()
    }
  }

  handleLocationFound = (e: Object) => {
    this.setState({
        hasLocation: true,
        current_coords: e.latlng,
    })
  }

  render() {
    const position = [this.state.start_coords.lat, this.state.start_coords.lng]
    const current_marker = this.state.hasLocation ? (
        <Marker position={this.state.current_coords}>
            <Popup>You are here</Popup>
        </Marker>
    ) : null

    return (
      <Map
      center={this.state.start_coords}
      zoom={this.state.zoom}
      ref = {this.mapRef}
      onClick={this.handleClick}
      onLocationfound={this.handleLocationFound}
      >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={this.state.start_coords}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {current_marker}
      </Map>
    );
  };
}
