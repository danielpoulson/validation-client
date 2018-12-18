import React from "react";
import { Link } from "react-router-dom";

// import { getFiles } from "../../actions/actions_files";
// import { logoutUser } from "../../actions/actions_main";

import "./styles.css";

class NavBar extends React.Component {
  state = {
    homeTab: "active",
    projectTab: null,
    tasksTab: null,
    filesTab: null,
    username: ""
  };

  // this.getFileList = this.getFileList.bind(this);
  // this.onLogoutUser = this.onLogoutUser.bind(this);
  // this.setActiveItem = this.setActiveItem.bind(this);

  onLogoutUser = () => {
    sessionStorage.setItem("authorised", false);
    sessionStorage.setItem("username", false);
    // this.props.logoutUser();
  };

  getFileList = () => {
    // this.props.getFiles("exp");
  };

  setActiveItem(e) {
    const tabPressed = e.target.id;
    this.setState({ homeTab: null });
    this.setState({ validationsTab: null });
    this.setState({ projectsTab: null });
    this.setState({ tasksTab: null });
    this.setState({ filesTab: null });
    this.setState({ [tabPressed]: "active" });
  }

  render() {
    return (
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" id="homeTab" to="/">
              <i className="fa fa-home fa-fw val-navbar--icon" />
              Home
            </Link>
            <Link className="navbar-item" id="validationsTab" to="/validations">
              <i className="fa fa-list-ul fa-fw val-navbar--icon" />
              Validations
            </Link>
            <Link
              className="navbar-item"
              id="projectsTab"
              to="/projects?page=1,search=undefined"
            >
              <i className="fa fa-list-ul fa-fw val-navbar--icon" />
              Projects
            </Link>
            <Link className="navbar-item" id="tasksTab" to="/tasks">
              <i className="fa fa-tasks fa-fw val-navbar--icon" />
              Tasks
            </Link>
            <Link
              className="navbar-item"
              to="/export"
              id="filesTab"
              onClick={this.getFileList}
            >
              <i className="fa fa-file-text-o fa-fw val-navbar--icon" />
              Files
            </Link>
            <Link className="navbar-item" to="/" onClick={this.onLogoutUser}>
              <i className="fa fa-sign-out fa-fw val-navbar--icon" />
              Logout ({this.props.username})
            </Link>
            <Link className="navbar-item" to="/user">
              <i className="fa fa-sign-out fa-fw val-navbar--icon" />
              User Management
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
