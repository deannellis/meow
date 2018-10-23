import React from 'react';
import { Link } from 'react-router-dom';

export default class EventList extends React.Component {
    render() {
        return (
            <div>
                <p>Event List</p>
                <ul>
                    <li>
                        <Link to="/map">Event 1</Link>
                    </li>
                </ul>
            </div>
        );
    }
}