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
          <p className="commentMainText">@User3482 - This is an example of text that would fill the reply to comment section. This should be relevant to the blurred images displayed beneath to somehow incentivise a particular choice.</p>
        </div>
        <CommentedReplyButtons />
        
     </div>    
    );
  }
}

export default Reply;
