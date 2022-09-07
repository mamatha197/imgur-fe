import React from "react";
import "./loginform.css";
import { Button, Input, Message } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class LoginForm extends React.Component {
  state = {
    data: { username: "", password: "" },
    err: {}
  };

  onChangeUser = (e) => {
    this.setState({ data: { user: e.target.value } });
  };
  onChangePassword = (e) => {
    this.setState({ data: { password: e.target.value } });
  };
  onSubmit = () => {};
  render() {
    return (
      <div className="login-form">
        <h2>Login</h2>
        <label className="label-form"> Username </label>
        <Input
          className="input-login"
          fluid
          size="large"
          placeholder="Username"
          onChange={this.onChangeUser}
        />
        <label className="label-form">Password</label>
        <Input
          fluid
          className="input-login"
          size="large"
          type="password"
          placeholder="Password"
          onChange={this.onChangePassword}
        />
        <div>
          <Button onClick={this.onSubmit}> Login</Button>
        </div>
      </div>
    );
  }
}
