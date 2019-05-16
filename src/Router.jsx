import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';

export function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/:gameId" exact component={App}/>
            </Switch>
        </BrowserRouter>
    )
}