import React, { Component } from "react";
import toastr from "toastr";
import ProjectForm from "../../components/Project/project-form";
import { projectFormIsValid } from "./project-form.validation";
// import { usersFormattedForDropdown } from "../../components/common/Selectors";
import TabBar from "../../components/common/TabBar";
import TaskList from "../../components/Tasks/task-list";
import FileList from "../../components/Files/FileList";
import ProjectLog from "../../components/Projects/project-log";
import ErrorPanel from "../../components/common/ErrorPanel";
import SectionHeader from "../../components/common/SectionHeaderDetail";
import { addObjectToArray, removeByIndex } from "../../utils/data-functions";
// import { deleteFile } from "../../api/file.api";

import "./styles.css";

class ProjectDetail extends Component {
  state = {
    activeTab: "DetailTab",
    comment: "",
    champ: "",
    DetailTab: "show",
    dirty: false,
    errors: [],
    files: [],
    FilesTab: "is-hidden",
    fCount: 0,
    isLogDirty: false,
    project: this.props.project,
    projectTitle: "Get the main title",
    pjNo: "",
    errorsObj: {},
    log: [],
    LogTab: "is-hidden",
    mainId: "new",
    tasks: this.props.tasks,
    TasksTab: "is-hidden",
    tCount: 0,
    status: [
      { value: 1, text: "Review" },
      { value: 2, text: "Approved" },
      { value: 3, text: "On-hold" },
      { value: 4, text: "Closed" },
      { value: 5, text: "Cancelled" }
    ]
  };

  addFile = file => {
    const files = addObjectToArray(this.state.files, file.data, "_id");
    return this.setState({ files: files });
  };

  onAddComment = e => {
    e.preventDefault();
    this.logMessage(`NOTE : ${this.state.comment}`, 5);
    this.setState({ comment: "" });
  };

  onCommentProject = e => this.setState({ comment: e.target.value });

  onCancel = () => {
    this.logMessage("Project Cancelled", 1);
  };

  onApprove = () => {
    this.logMessage("Approved to Implement", 1);
  };

  onDeleteFile = id => {
    const files = removeByIndex(this.state.files, id);
    // deleteFile(id, "Equipment");
    return this.setState({ files: files });
  };

  onFinal = () => {
    this.logMessage("Project Closed", 1);
  };

  onSelectTask = i => {
    // this.props.getTask(i.id);
    this.props.history.push(`/task/${i.id}`);
  };

  newTask = () => {
    this.props.history.push("/task/new");
  };

  logMessage(message, logId) {
    const comment = {
      pj_no: this.state.pj_no,
      pj_id: logId,
      pj_action: message,
      pj_actby: this.props.main.user.fullname,
      pj_actdate: new Date()
    };

    const log = [...this.state.log, comment];

    this.setState({ log: log, isLogDirty: true });
  }

  cancelProject = e => {
    e.preventDefault();
    // this.props.history.push(`/project/${this.state.project.pj_no}`);
    this.props.history.push("/projects");
  };

  exportTasks = () => {
    // exportTaskList(this.state.pjNo);
  };

  updateProjectState = event => {
    const field = event.target.name;
    const _project = this.state.project;
    _project[field] = event.target.value;
    return this.setState({ project: _project });
  };

  updateProjectStateDate = (field, value) => {
    console.log(field, value);
    const _project = this.state.project;
    _project[field] = value;
    return this.setState({ project: _project });
  };

  saveProject = event => {
    event.preventDefault();
    const _project = this.state.project;

    const validation = projectFormIsValid(_project);
    this.setState({ errors: validation.errors });
    this.setState({ errorsObj: validation.errorsObj });

    if (!validation.formIsValid) {
      return;
    }

    if (this.state.pjNo !== "new") {
      _project.newOwner = _project.pj_champ !== this.state.champ;

      if (_project.pj_stat >= 4) {
        // this.props.closeProject(_project.pj_no);
      } else {
        // this.props.editProject({
        //   _id: _project._id,
        //   pj_no: _project.pj_no,
        //   pj_title: _project.pj_title,
        //   pj_champ: _project.pj_champ,
        //   pj_target: _project.pj_target,
        //   pj_stat: _project.pj_stat,
        //   pj_pry: _project.pj_pry
        // });
      }
      _project.pj_log = this.state.log;
      // saveProjectById(_project);
    } else {
      const created = [];
      created.push({
        pj_id: 0,
        pj_action: "Created",
        pj_actby: this.props.main.user.fullname,
        pj_actdate: new Date()
      });
      _project.pj_log = created;
      _project.pj_stat = _project.pj_stat || 1;

      // createProject(_project).then(proj => {
      //   this.props.addProject(proj.data);
      // });
    }

    toastr.success("Project has been saved", "Project Detail", {
      timeOut: 1000
    });

    this.props.history.push("/projects");
  };

  showTab = value => {
    this.setState({
      DetailTab: "is-hidden",
      TasksTab: "is-hidden",
      FilesTab: "is-hidden",
      LogTab: "is-hidden",
      [value.tabType]: "",
      activeTab: value.tabType
    });
  };
  props: {
    project: Object,
    tasks: Array
    // project: any,
    // ctTotal: number,
    // createLog: any,
    // closeProject: any,
    // editProject: any,
    // getProject: any,
    // getProjectTasks: any,
    // getTask: any,
    // history: any,
    // main: any,
    // setTitle: any,
    // tasklist: any,
    // users: any,
    // match: {
    //   params: {
    //     id: string
    //   }
    // }
  };

  render() {
    const _title =
      this.props.project !== null
        ? `${this.state.project.pj_no} - ${this.state.project.pj_title}`
        : "New - Project";

    return (
      <div>
        <div>
          <SectionHeader
            colSize="12"
            headerSize="sub"
            title={_title}
            hideSearch="is-hidden"
          />
        </div>
        <div className="columns is-gapless">
          <div className="column is-four-fifths">
            <TabBar
              showTabBar={this.state.pjNo}
              mode="project"
              showTab={this.showTab}
              taskCount={this.state.tasks.length}
              fileCount={this.state.files.length}
              activeTab={this.state.activeTab}
            />
          </div>
          <div className="column">
            <div className="buttons">
              <span className="button is-primary" onClick={this.saveProject}>
                Save Project
              </span>
              <span className="button is-info" onClick={this.cancelProject}>
                Cancel
              </span>
            </div>
          </div>
        </div>
        <div className={this.state.DetailTab}>
          {this.state.errors.length > 0 ? (
            <ErrorPanel errors={this.state.errors} />
          ) : (
            ""
          )}
          <ProjectForm
            project={this.state.project}
            errors={this.state.errorsObj}
            onProjectStateChange={this.updateProjectState}
            onDateProject={this.updateProjectStateDate}
            status={this.state.status}
            users={[
              { value: "Daniel Poulson", text: "Daniel Poulson" },
              { value: "Tim Woods", text: "Tim Woods" }
            ]}
          />
        </div>
        <TaskList
          onSelectTask={this.onSelectTask}
          tasklist={this.state.tasks}
          tasksTab={this.state.TasksTab}
          title={this.state.projectTitle}
          newTask={this.newTask}
          exportTasks={this.exportTasks}
        />
        <ProjectLog
          logTab={this.state.LogTab}
          comCurrent={this.state.comment}
          onAddComment={this.onAddComment}
          onApprove={this.onApprove}
          onCommentProject={this.onCommentProject}
          onFinal={this.onFinal}
          onCancel={this.onCancel}
          log={this.state.log}
        />
        <div className={this.state.FilesTab}>
          <FileList
            filesTab={this.state.FilesTab}
            sourceId={this.state.project.pj_no}
            files={this.state.files}
            addFile={this.addFile}
            deleteFile={this.onDeleteFile}
            user={"Daniel Poulson"}
            mode="Project"
          />
        </div>
      </div>
    );
  }
}

export default ProjectDetail;

// const mapStateToProps = state => ({
//   main: state.main,
//   users: usersFormattedForDropdown(state.users)
// });

// export default connect(
//   mapStateToProps,
//   {
//     addProject,
//     closeProject,
//     editProject,
//     getProject,
//     setMain,
//     setTitle
//   }
// )(ProjectDetail);
