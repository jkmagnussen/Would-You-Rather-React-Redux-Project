import React from "react";
import "./Reply.css";

import CommentedReplyButtons from "./CommentedReplyButtons/CommentedReplyButtons";

import user2 from "../../../Assets/user2.jpg"


class Reply extends React.Component {
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
      <div className="ReplycommentWrap">
        <div className="userReplyLayout">
          <div className="usernameAndImgWrap">
            <img className="profileCommentThumbnail" src={user2} />
          <h3 className="commentUsernameDisplay">Twins3375</h3>
          </div>
          <p className="commentMainText">{this.props.commentReplies}</p>
        </div>
        <CommentedReplyButtons />
        
     </div>    
    );
  }
}

export default Reply;
