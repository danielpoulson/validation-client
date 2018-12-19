import React from "react";
import ProjectComment from "../common/Comment";
import ProjCommentLog from "../common/CommentLog";

type Props = {
  log: any,
  logTab: string,
  comCurrent: string,
  onAddComment: Function,
  onApprove: any,
  onCommentProject: Function,
  onFinal: any,
  onCancel: any
};

const ProjectLog = ({
  log,
  logTab,
  comCurrent,
  onAddComment,
  onApprove,
  onCommentProject,
  onFinal,
  onCancel
}: Props) => {
  const butGroup = { padding: 10 };

  return (
    <div className={logTab}>
      <div>
        <ProjectComment
          onAddComment={onAddComment}
          onCommentChange={onCommentProject}
          comCurrent={comCurrent}
        />
      </div>
      <ProjCommentLog
        log={log}
        action="pj_action"
        actionBy="pj_actby"
        actionDate="pj_actdate"
      />
      <div className="row">
        <div style={butGroup} className="pull-right">
          <button className="btn btn-info dp-margin-10-LR" onClick={onApprove}>
            Approval to Implement
          </button>
          <button className="btn btn-success dp-margin-10-LR" onClick={onFinal}>
            Final and Complete
          </button>
          <button className="btn btn-danger dp-margin-10-LR" onClick={onCancel}>
            Cancel / Withdrawn
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectLog;
