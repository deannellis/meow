import React from 'react';
import { Link } from 'react-router-dom';
import MapView from './MapView';

export default class MapViewPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkpoint: {
        lat: 38.068224,
        lon: -84.4890112
      }
    }
  }
  render() {
    return (
      <div>
          <h3>Map View Page</h3>
          <Link to="/">Back to Events</Link>
          <p>
            Map View | <Link to="/list">List view</Link>
          </p>
          <MapView checkpoint={this.state.checkpoint}/>
      </div>
    );
  }
}
