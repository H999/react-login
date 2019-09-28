import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './Login';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Login />, document.getElementById('login'));

serviceWorker.unregister();
