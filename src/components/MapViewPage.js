import React from 'react';
import { Link } from 'react-router-dom';

export default class MapViewPage extends React.Component {
    render() {
        return (
            <div>
                <h3>Map View Page</h3>
                <Link to="/">Back to Events</Link>
                <p>
                    Map View | <Link to="/list">List view</Link>
                </p>
            </div>
        );
    }
}