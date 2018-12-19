import React from "react";
import FileTable from "../FileTable";
import FileZone from "../FileZone";
// import { downloadFile, uploadFile } from "../../api/file.api";
import { convertfilename } from "../../../utils/helpers";

import "./styles.css";

type Props = {
  deleteFile: Function,
  downloadFile: any,
  files: Array<mixed>,
  filesTab: string,
  removeFile: any,
  setFiletabCount: any,
  sourceId: string,
  user: any
};

const FileList = ({
  addFile,
  deleteFile,
  files,
  sourceId,
  user,
  mode
}: Props) => {
  const onDrop = files => {
    files.forEach(file => {
      const _newFileName: string = convertfilename(sourceId, file.name);
      const formData = new FormData();
      formData.append(_newFileName, file);
      formData.append("sourceId", sourceId);
      formData.append("dpUser", user);
      formData.append("docName", file.name);
      formData.append("filename", _newFileName);
      formData.append("mode", mode);

      //   uploadFile(formData).then(data => addFile(data));
    });
  };

  const onDownload = fileLoad => {
    // downloadFile(fileLoad);
  };

  return (
    <div className="val--files__container">
      <div className="val--files__filelist">
        <FileTable
          files={files}
          user={user}
          deleteFile={deleteFile}
          onDownload={onDownload}
        />
      </div>
      <div className="val--files__filezone">
        <FileZone user={user} sourceId={sourceId} onDrop={onDrop} />
      </div>
    </div>
  );
};

export default FileList;
