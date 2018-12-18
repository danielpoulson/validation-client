import React from "react";

type Props = {
  username: String,
  password: String,
  onChange: any,
  onLogin: any
};

const Login = ({ username, password, onChange, onLogin }: Props) => (
  <form className="form">
    <div className="columns">
      <div className="column">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-small"
              name="username"
              placeholder="Username"
              type="text"
              value={username || ""}
              onChange={onChange}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-user" />
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              name="password"
              className="input is-small"
              type="password"
              placeholder="Password"
              value={password || ""}
              onChange={onChange}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-lock" />
            </span>
          </p>
        </div>
      </div>
      <div className="column is-3">
        <div className="field">
          <p className="control">
            <button
              className="button is-success is-small"
              type="submit"
              onClick={onLogin}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  </form>
);

export default Login;
