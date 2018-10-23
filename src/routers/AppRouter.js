import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import EventListPage from '../components/EventListPage';
import MapViewPage from '../components/MapViewPage';
import ListViewPage from '../components/ListViewPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={EventListPage} exact={true} />
                <Route path="/map" component={MapViewPage} />
                <Route path="/list" component={ListViewPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;