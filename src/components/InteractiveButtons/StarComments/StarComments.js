import React from "react";
import "./Comment.css";
import axios from "axios";
import user from "../Assets/user.jpg";

import ReplyButtons from "./ReplyButtons/ReplyButtons";

import view from "../Assets/look.png";
import view2 from "../Assets/look2.png";

import clap from "../Assets/clap.png";
import clap2 from "../Assets/clap2.png";

import Comment from "../Comment/Comment"

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
      <div className="commentWrap">
        <Comment />
     </div>         
    );
  }
}

export default StarComments;
