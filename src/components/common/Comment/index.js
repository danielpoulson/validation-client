import React from "react";
import styled from "styled-components";
import TextArea from "../TextArea";

const CommentButton = styled.button`
  margin-top: 0.7rem;
`;

type Props = {
  onAddComment: Function,
  onCommentChange: Function,
  comCurrent: stirng
};

const Comment = (props: Props) => (
  <div className="columns">
    <div className="column">
      <TextArea
        name="comments"
        value={props.comCurrent}
        label="Enter a comment:"
        onChange={props.onCommentChange}
        placeholder="Add Comments.."
      />
    </div>
    <div className="cloumn">
      <CommentButton className="button is-primary" onClick={props.onAddComment}>
        Add Comment
      </CommentButton>
    </div>
  </div>
);

export default Comment;
