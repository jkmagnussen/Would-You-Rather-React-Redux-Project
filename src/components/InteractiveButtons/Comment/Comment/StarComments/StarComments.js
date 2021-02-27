import React from "react";
import "./StarComment.css";
import axios from "axios";


import Comment from "../Comment";

class StarComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: 5,
      viewCommentReply: false,
      commentReplyCount: 3,
      comment: "This is an example of text that would fill this status/ caption section. This should be relevant to the blurred images displayed beneath to somehow incentivise a particular choice.",
      commentReplies: "This is an example of a comment reply",
      starComment: false,
    };
  }

  componentDidMount() {
    const self = this;
  }

  render()
  {
      console.log(this.state.starComment);
    const { users } = this.props;
    
    return (
      <div className="starCommentWrap">
        <Comment />
     </div>         
    );
  }
}

export default StarComments;
