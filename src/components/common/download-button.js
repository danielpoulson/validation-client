import React from "react";
import { url } from "../../config";

export default class DownloadButton extends React.Component {
  constructor(props) {
    super(props);
    this.onDownload = this.onDownload.bind(this);
  }
  onDownload() {
    window.location.href = `${url}/api/files/upload/${this.props.fileLoad}`;

    if (this.props.exportFiles === "is-hidden") {
      this.props.removeFile(this.props.fileId);
    }
  }
  props: {
    fileLoad: any,
    exportFiles: string,
    removeFile: any,
    fileId: string
  };

  render() {
    return (
      <span className="button is-info is-small" onClick={this.onDownload}>
        <span className="icon is-small">
          <i className="fa fa-arrow-circle-down" />
        </span>
        <span>Download</span>
      </span>
    );
  }
}
