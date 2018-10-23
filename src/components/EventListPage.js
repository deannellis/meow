import React from 'react';
import EventList from './EventList';

export default class EventListPage extends React.Component {
    render() {
        return (
            <div>
                <h3>Event List Page</h3>
                <EventList />
            </div>
        );
    }
}