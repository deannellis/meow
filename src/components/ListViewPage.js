import React from 'react';
import { Link } from 'react-router-dom';

export default class ListViewPage extends React.Component {
    render() {
        return (
            <div>
                <h3>List View Page</h3>
                <Link to="/">Back to Events</Link>
                <p>
                    <Link to="/map">Map view</Link> | List View
                </p>
            </div>
        );
    }
} 