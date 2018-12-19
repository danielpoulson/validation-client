import React from "react";
import { url } from "../../config";

export default class BookoutButton extends React.Component {
  constructor(props) {
    super(props);

    this.onBookout = this.onBookout.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
  }

  onBookout() {
    // TODO (3) MED If download does not complete donot delete from server.

    // const _log = { CC_No: this.props.source, CC_Id: 4, CC_Action: `File booked out - ${this.props.fileLoad}`,
    //           CC_ActBy: this.props.user.fullname, CC_ActDate: new Date() };

    window.location.href = `${url}/api/files/upload/${this.props.fileLoad}`;

    //this.props.createLog(_log);
    this.props.bookoutFile(this.props.fileId, this.props.user.fullname);
  }

  deleteFile() {
    const _log = {
      CC_No: this.props.source,
      CC_Id: 4,
      CC_Action: `**** File Deleted **** - ${this.props.fileLoad}`,
      CC_ActDept: this.props.user.dept,
      CC_ActBy: this.props.user.fullname,
      CC_ActDate: new Date()
    };
    this.props.createLog(_log);
    this.props.deleteFile(this.props.fileId);
  }
  props: {
    fsBooked: number,
    user: {
      fullname: string,
      dept: string,
      role: string
    },
    source: string,
    fileId: string,
    bookoutFile: any,
    fileLoad: string,
    createLog: any,
    deleteFile: any
  };

  render() {
    let text = null;
    let action = {};
    let classButton = "";
    let classSpan = "";

    if (this.props.fsBooked > 0) {
      if (this.props.user.role === "admin") {
        text = "Delete";
        action = this.deleteFile;
        classButton = "button is-danger is-small";
        classSpan = "fa fa-trash-o";
      } else {
        text = "Booked Out";
        classButton = "button is-danger is-small";
        classSpan = "fa fa-trash-o disabled";
      }
    } else {
      text = "Book out";
      action = this.onBookout;
      classButton = "button is-warning is-small";
      classSpan = "fa fa-book";
    }
    return (
      <span className={classButton} onClick={action}>
        <span className="icon is-small">
          <i className={classSpan} />
        </span>
        <span>{text}</span>
      </span>
    );
  }
}
