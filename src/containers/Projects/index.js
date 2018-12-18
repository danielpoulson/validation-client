import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import Toastr from "toastr";

import ProjectList from "../../components/Projects/project-list";
import Pagination from "../../components/common/Pagination";
import SectionHeader from "../../components/common/SectionHeader";

import { perPage } from "../../config";
import { queryString } from "../../utils/helpers";

const ALL_PROJECTS_QUERY = gql`
  query ALL_PROJECTS_QUERY(
    $skip: Int = 0
    $limit: Int = ${perPage}
    $sort: String = "pj_no"
  ) {
    projects(limit: $limit, skip: $skip, sort: $sort) {
      _id
      pj_no
      pj_title
      pj_pry
      pj_champ
      pj_target
      pj_stat
    }
  }
`;

/* actions */
// import {
//   getProject,
//   getProjects,
//   addProject,
//   loadPage,
//   exportProjects,
//   setProjects
// } from "../../actions/actions_projects";
// import { setMain, setProjectState } from "../../actions/actions_main";
// import { getFiles } from "../../actions/actions_files";
// import { projectListReport } from "../../api/project.api";

class Projects extends Component {
  //TODO: Add in state managment for the search text
  //TODO: Add in state managment for state (SHOWALL)
  state = {
    activePage: 0,
    colSelected: null,
    paged: {},
    count: 0,
    txtSearch: null,
    showAll: false,
    projectCount: 14,
    projectDataPage: [],
    projectSortedBy: null
  };

  // TODO: (2) MED Show all button reverts to "Show all"
  // The button should be "Show Current" but reverts back when returning from the details page.

  onSearchText = event => {
    const value = event.target.value;
    this.setState({ activePage: 0 });
    this.setState({ txtSearch: value });
    this.onProject(0, value);
  };

  onGetProject = i => {
    const _projno = i.projno;
    /* TODO: This section adds variable to the main state */
    // this.props.setMain({
    //   MainId: _projno,
    //   id: i.id,
    //   CurrentMode: "project",
    //   loading: true
    // });

    // this.props.getProject(_projno);
    this.props.history.push(`/project/${_projno}`);
  };

  onSortByClick = column => {
    this.setState({ activePage: 0 });
    this.onProject(0, this.state.txtSearch, column);
  };

  allProjects = () => {
    let _showAll = this.state.showAll;
    _showAll = !_showAll;
    this.setState({ showAll: _showAll });
    // TODO: Add a function to toggle all projects
    // this.props.setProjectState();

    if (this.state.showAll !== true) {
      //   this.props.getProjects(6);
    } else {
      //   this.props.getProjects(4);
    }
    this.setState({ txtSearch: null });
    this.setState({ activePage: 0 });
    const toastMessage = _showAll
      ? "Showing all projects"
      : "Showing active projects";
    Toastr.success(toastMessage, "Project Detail", { timeOut: 2000 });
  };

  // exportProject = () => {
  //   const info = {
  //     fsSource: "exp",
  //     fsAddedBy: this.props.user.username,
  //     fsType: "projects",
  //     search: this.state.txtSearch,
  //     showAll: this.state.showAll
  //   };

  //   this.props.exportProjects(info);
  // };

  exportProject = () => {
    // This code block calls the remote server and request csv data to be returned based on
    // what was passed in
    // When the data returns a temporary link is created to automate a data download.
    // D.Poulson 26/06/2018

    // const info = {
    //   search: this.state.txtSearch,
    //   showAll: this.state.showAll
    // };

    // projectListReport(info).then(res => {
    //   const data = new Blob([res.data], { type: "text/csv" });
    //   var csvURL = window.URL.createObjectURL(data);
    //   const tempLink = document.createElement("a");
    //   tempLink.href = csvURL;
    //   tempLink.setAttribute("download", "projectlist.csv");
    //   tempLink.click();
    // });
    return console.log("TODO: Build a projects export function");
  };

  newProject = () => {
    console.log("TODO: Create a new project function");
    // this.props.getProject("new");
    // this.props.setMain({
    //   MainId: "new",
    //   CurrentMode: "project",
    //   loading: false
    // });
    // this.props.setProjects();
  };

  props: {
    history: any
  };

  render() {
    const _projectTitle = "Register";
    let butText;

    const [page, search] = queryString(this.props.history.location.search);

    if (this.state.showAll !== true) {
      butText = "Show all projects";
    } else {
      butText = "Show Current Projects";
    }

    return (
      <section>
        <div className="">
          <SectionHeader
            colSize="6"
            headerSize="main"
            title={`Project Control - ${_projectTitle}`}
            searchText={this.state.txtSearch}
            onSearchText={this.onSearchText}
          />
        </div>
        <div className="columns">
          <div className="column">
            <Link to="/project/new" onClick={this.newProject}>
              <button className="button is-primary">New Project</button>
            </Link>

            <button
              className="button is-link dp-margin-10-LR"
              onClick={this.exportProject}
            >
              Export List
            </button>

            <button className="button is-info" onClick={this.allProjects}>
              {butText}
            </button>
          </div>
          <div className="column">
            <Pagination activePage={page} numPage={perPage} search={search} />
          </div>
        </div>
        <Query
          query={ALL_PROJECTS_QUERY} // fetchPolicy="network-only"
          variables={{ skip: page * perPage - perPage }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              console.log(page * perPage - perPage) || (
                <div className="">
                  <ProjectList
                    projectlist={data.projects}
                    colSelected={this.state.projectSortedBy}
                    getProject={this.onGetProject}
                    sortByClick={this.onSortByClick}
                  />
                </div>
              )
            );
          }}
        </Query>
      </section>
    );
  }
}

export default Projects;
