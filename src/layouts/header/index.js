import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Login from "../../layouts/login";
import NavBar from "../../layouts/navbar";
import { setAuth } from "../../utils/helpers";
import "./styles.css";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($username: String!, $password: String!) {
    signin(username: $username, password: $password) {
      _id
      token
      role
      username
      fullname
    }
  }
`;

class Header extends Component {
  state = {
    password: "",
    username: "",
    fullname: ""
  };

  componentDidMount() {
    this.setState({
      fullname: sessionStorage.getItem("fullname"),
      username: sessionStorage.getItem("username")
    });
  }

  onLogin = e => {
    e.preventDefault();
  };

  setStateLogin = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="top-band">
        <section className="columns pmr-header__container">
          <div className="column">
            <h3 className="top-band-h3">Project Manager</h3>
          </div>
          <Mutation mutation={SIGNIN_MUTATION} variables={this.state}>
            {(signin, { error, loading }) => (
              <div className="column is-3 login-div">
                {!this.state.fullname ? (
                  <Login
                    password={this.state.password}
                    username={this.state.username}
                    onChange={this.setStateLogin}
                    onLogin={async e => {
                      e.preventDefault();
                      const { data } = await signin();
                      this.setState({
                        fullname: data.signin.fullname
                      });
                      setAuth(data);
                    }}
                  />
                ) : (
                  <div className="is-pulled-right">
                    <p className="">Welcome: {this.state.fullname}</p>
                    <Link to="/user_pass" className="change-link">
                      {this.state.fullname ? "Change Password?" : ""}
                    </Link>
                  </div>
                )}
              </div>
            )}
          </Mutation>
        </section>
        <div className="pmr-header__container">
          <NavBar username={this.state.username} />
        </div>
      </div>
    );
  }
}

export default Header;
