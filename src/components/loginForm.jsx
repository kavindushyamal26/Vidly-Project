import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            placeholder="Enter Username"
            onChange={this.handleChange}
            autoFocus="true"
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            placeholder="Enter Password"
            onChange={this.handleChange}
            autoFocus="false"
          />

          <button type="submit" className="btn btn-primary my-3">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
