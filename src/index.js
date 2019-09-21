import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './Login';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
 
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Login />, document.getElementById('login'));

const responseFacebook = (response) => {
  console.log(response);
}
 
ReactDOM.render(
  <FacebookLogin
//   clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
  buttonText="Login Facebook"
  onSuccess={responseFacebook}
  onFailure={responseFacebook}
  cookiePolicy={'single_host_origin'}
//   cssClass="my-facebook-button-class"
  icon="fa-facebook"
    appId="1088597931155576"
    fields="name,email,picture"
    // callback={responseFacebook} 
    />,
  document.getElementById('fbButton')
);

const responseGoogle = (response) => {
    console.log(response);
  }
   
  ReactDOM.render(
    <GoogleLogin
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Login Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />,
    document.getElementById('gButton')
  );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
