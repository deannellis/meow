// @flow

import React, { createRef, Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

type State = {
    hasLocation: boolean,
    zoom: number,
      current_coords: {
          lat: number,
          lng: number,
      },
      isAtCheckpoint: null,
  };
  
  export default class MapView extends Component<{}, State> {
    state = {
      hasLocation: false,
      zoom: 15,
      current_coords: {
          lat: null,
          lng: null,
      },
      isAtCheckpoint: null,
    };
  
    mapRef = createRef();

    handleLocationQuery = () => {
      const map = this.mapRef.current
      if (map != null) {    
          map.leafletElement.locate()
      }
    }
  
    handleLocationFound = (e: Object) => {
      const map = this.mapRef.current
      this.setState({
          hasLocation: true,
          current_coords: e.latlng,
      })
      map.leafletElement.setView(this.state.current_coords);
    }

    handleCheckIn = () => {
      const map = this.mapRef.current
      if(this.state.hasLocation && map) {
        const onLocation = this.state.current_coords.equals(this.props.checkpoint, 1e-3) //checks the proximity of two latlngs to a margin of three decimal places
        this.setState({isAtCheckpoint: onLocation})
      } else if (!this.state.hasLocatin){
        alert("you need to get your location!")
      }
    }

    renderCheckIn = () => {
      if(this.state.isAtCheckpoint === null){
        return <p></p>
      }

      return <p>{this.state.isAtCheckpoint ? 'You are here!!!' : 'You are not at the checkpoint'}</p>
    }
  
    render() {
      const position = [this.props.checkpoint.lat, this.props.checkpoint.lng];
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
            center={position}
            zoom={this.state.zoom}
            ref = {this.mapRef}
            onLocationfound={this.handleLocationFound}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom="20"/>
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            {current_marker}
          </Map>
          
          <button onClick={this.handleLocationQuery}>Find Me</button>
          <p>Lat: {this.state.current_coords.lat}</p>
          <p>Lng: {this.state.current_coords.lng}</p>

        <p>___________________</p>
          <h3>Checkpoint 1 ({this.props.checkpoint.lat}, {this.props.checkpoint.lng})</h3>
          <div><button onClick={this.handleCheckIn}>Check In</button>
              { this.renderCheckIn() }
          </div>
        </div>
      );
    };
  }