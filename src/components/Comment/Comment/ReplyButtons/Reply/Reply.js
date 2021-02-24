import React from "react";
import "./Reply.css";

import CommentedReplyButtons from "./CommentedReplyButtons/CommentedReplyButtons";

import user from "../../../Assets/user.jpg"


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
            <img className="profileCommentThumbnail" src={user} />
          <h3 className="commentUsernameDisplay">User3482</h3>
          </div>
          <p className="commentMainText">This is an example of text that would fill this status/ caption section. This should be relevant to the blurred images displayed beneath to somehow incentivise a particular choice.</p>
        </div>
        <CommentedReplyButtons />
        
     </div>    
    );
  }
}

export default Reply;
