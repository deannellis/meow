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
  
  export default class MapView extends Component<{}, State> {
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
      isAtCheckpoint: false,
    };
  
    mapRef = createRef();
  
    handleClick = () => {
      const map = this.mapRef.current
      if (map != null) {
          map.leafletElement.locate();
      }
    }
  
    handleLocationFound = (e: Object) => {
      this.setState({
          hasLocation: true,
          current_coords: e.latlng,
      })
    }

    handleCheckIn = () => {
      if(!this.state.hasLocation) {
        const map = this.mapRef.current
        if (map != null) {
            map.leafletElement.locate();
        }
      }
      if(this.props.checkpoint.lat == this.state.current_coords.lat && this.props.checkpoint.lon == this.state.current_coords.lng) {
        this.setState({
          isAtCheckpoint: true
        });
      } else {
        this.setState({
          isAtCheckpoint: false
        });
      }
    }
  
    render() {
      const position = [this.state.start_coords.lat, this.state.start_coords.lng];
      const current_marker = this.state.hasLocation ? (
          <Marker position={this.state.current_coords}>
              <Popup>
                You are here
              </Popup>
          </Marker>
      ) : null
  
      return (
        <div>
          <Map
            center={this.state.start_coords}
            zoom={this.state.zoom}
            ref = {this.mapRef}
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
          
          <button onClick={this.handleClick}>Find Me</button>
          <p>Lat: {this.state.current_coords.lat}</p>
          <p>Lng: {this.state.current_coords.lng}</p>
          <p>___________________</p>

          <h3>Checkpoint 1 ({this.props.checkpoint.lat}, {this.props.checkpoint.lon})</h3>

          <p>Press button below to see if you are at the checkpoint</p>
          <button onClick={this.handleCheckIn}>Check In</button>
          <p>{this.state.isAtCheckpoint ? 'You are here!!!' : 'You are not at the checkpoint' }</p>
        </div>
      );
    };
  }