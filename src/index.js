import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from './Login';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Homepage" component={App} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
