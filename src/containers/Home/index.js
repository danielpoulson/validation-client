// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { getUserDashboard } from '../../actions/actions_main';
// import { loadPage, setSearch } from '../../actions/actions_projects';
// import { loadPageTask } from '../../actions/actions_tasks';
// import RechartBarChart from "../../components/graphs/rechart-bar-chart";
// import RechartLineChart from "../../components/graphs/rechart-line-chart";
import "./styles.css";

class Home extends Component {
  state = {
    username: null,
    fullname: null
  };
  componentWillMount() {
    const username = sessionStorage.getItem("username");
    const fullname = sessionStorage.getItem("fullname");

    this.setState({ username, fullname });
    if (username) {
      // this.props.getUserDashboard(username);
    }
  }

  getTasks = () => {
    const action = {};
    action.search = this.state.fullname || null;
    // this.props.loadPageTask(action);
  };

  getProjects = () => {
    this.props.setSearch(this.state.fullname);
    this.props.history.push("/projects");
  };

  getAllTasks = () => {
    const action = {};
    action.search = null;
    // this.props.loadPageTask(action);
  };

  getAllProjects = () => {
    const action = {};
    action.search = null;
    // this.props.loadPage(action);
  };
  props: {
    // allOpenProjects: number,
    // allOpenTasks: number,
    // countProjectsUser: number,
    // countTasksUser: number,
    // fullname: string,
    history: any,
    setSearch: any
  };

  render() {
    return (
      <div>
        <div className="dashboard">
          <h1>Dashboard</h1>
        </div>
        <section className="columns">
          <div className="column">
            <div className="box mybox green grow " onClick={this.getProjects}>
              <h2>My Projects</h2>
              <i className="fa fa-list-alt" />
              &nbsp; 99
            </div>
          </div>

          <div className="column">
            <Link to="/tasks">
              <div
                className="box mybox blue grow router-link"
                onClick={this.getTasks}
              >
                <h2>My Tasks</h2>
                <i className="glyphicon glyphicon-list-alt">&nbsp; </i>
                99
              </div>
            </Link>
          </div>

          <div className="column">
            <Link to="/projects">
              <div
                className="box mybox orange grow"
                onClick={this.getAllProjects}
              >
                <h2>All Projects</h2>
                <i className="fa fa-list-alt" />
                &nbsp; 99
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="/tasks">
              <div className="box mybox purple grow" onClick={this.getAllTasks}>
                <h2>Open Tasks</h2>
                <i className="fa fa-tasks" />
                &nbsp; 99
              </div>
            </Link>
          </div>
        </section>
        <section className="columns">
          <div className="column">
            <h3>Open vs Closed Projects</h3>
            {/* <RechartBarChart /> */}
          </div>
          <div className="column">
            <h3>Overdue Tasks</h3>
            {/* <RechartLineChart /> */}
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
