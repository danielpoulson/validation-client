import React from "react";
import moment from "moment";
import styled from "styled-components";
import { sortUtcDates } from "../../../utils/data-functions";

const Box = styled.div`
  margin: 20px 20px 10px 50px;
  border-radius: 3px;
  border: 1px solid lightblue;
  padding-left: 0.75em;
  padding-right: 0.75em;
`;

type Props = {
  log: any,
  action: string,
  actionBy: string,
  actionDate: string
};

const CommentLog = ({ log, action, actionBy, actionDate }: Props) => {
  let logs = [];
  const act = action;
  const actby = actionBy;
  const actDate = actionDate;
  const listStyleLi = { padding: 5 };
  const spanStyle = { color: "blue" };
  const _log = sortUtcDates(log, actDate, "reverse");

  if (_log !== null && _log.length !== 0) {
    logs = _log.map((log, i) => (
      <li style={listStyleLi} key={i}>
        <span style={spanStyle} className="fa fa-pencil" /> {log[act]}
        <small>
          <em>
            {" "}
            - ({log[actby]} added on{" "}
            {moment(new Date(log[actDate])).format("DD/MM/YYYY")}){" "}
          </em>
        </small>
      </li>
    ));
  }

  return (
    <div>
      <Box className="box">
        <ul className="scrollable">{logs}</ul>
      </Box>
    </div>
  );
};

export default CommentLog;
