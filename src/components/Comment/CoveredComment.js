import React from "react";
import { _getUsers } from "../../utils/_DATA";
import "./CoveredComment.css";

import Comment from "./Comment/Comment";
import CommentForm from "./CommentForm/CommentForm"

class CoveredComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const self = this;
  }


  render() {
    const { users } = this.props;
    
    return (
      <div class="commentsWrap">
        <CommentForm />

        // fake comments

        <Comment />
        <Comment />
        <Comment />
        <Comment />
        
              
                </div>

    );
  }
}

export default CoveredComment;
