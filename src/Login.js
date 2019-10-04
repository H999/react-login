import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import "./Login.css";

const responseGoogle = (response) => {
  console.log(response);
}
const responseFacebook = (response) => {
  console.log(response);
}

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    // alert("email: " + this.state.email + "\npass: " + this.state.password);

    var payload = {
      email: this.state.email,
      password: this.state.password
    };

    var data = new FormData();
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    const data1 = new URLSearchParams(data);

    await fetch("https://nameless-spire-31903.herokuapp.com/api/auth/login",
      {
        method: "POST",
        body: data1
      }
    )
      .then(function (res) {
        console.log(res.status);
        return res.json();
      })
      .then(function (data) { console.log((data)) })
  }

  render() {
    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit}>
          <div class="logo_container">
            <img className="logo" src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"} />
            <a href="/Signup" title="Signup" class="logo_signup"></a>
          </div>
          <Form.Group controlId="email" bsSize="large">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="email@examle" />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              placeholder="Password" />
            <a href="#" style={{ color: "white" }}>Forgot password</a>
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit">
            Login
          </Button>
        </Form>

        <div>
          <FacebookLogin
            appId="1088597931155576"
            fields="name,email,picture"
            icon={<img
              margin-right="10px"
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/267px-F_icon.svg.png"}
              width="38" />}
            cssClass="fbtn"
            textButton="&nbsp;&nbsp;&nbsp;Login with Facebook"
            // onClick={componentClicked}
            callback={responseFacebook}
          />
        </div>
        <div>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login with Google"
            icon="True"
            theme="dark"
            className="Button g"
            // stlye={{font:Helvetica;font-weight:700; }}
            // render={renderProps => (
            //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}></button>
            // )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          /></div>
      </div>
    );
  }
}