import React from "react";

const LoginForm = () => {
  return (
    <div>
      <h1>Login Form</h1>
      <form>
        <div className="form-group my-2">
          <label htmlFor="username">Username</label>
          <input
            type="email"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary my-3">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
