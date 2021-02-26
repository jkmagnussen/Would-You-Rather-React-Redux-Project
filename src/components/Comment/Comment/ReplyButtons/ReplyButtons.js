import React from "react";

import "./ReplyButtons.css";
import axios from "axios";

import view from "../../Assets/look.png";
import view2 from "../../Assets/look2.png";
import clap from "../../Assets/clap.png";
import clap2 from "../../Assets/clap2.png";
import look from "../../Assets/look.png";
import star from "../../Assets/star.png";
import star2 from "../../Assets/star2.png";


import Reply from "./Reply/Reply"
import ReplyCommentForm from "./ReplyCommentForm/ReplyCommentForm";


class ReplyButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: 5,
      viewMore: false,
      viewCommentReply: false,
      commentReplyCount: 1,
      starActive: false,
      commentReply: false
    };
  }


  componentDidMount() {
    const self = this;
  }

  commentReplyTrigger = () =>
  {

       this.setState({
        commentReply: !this.state.commentReply,
      })
  }

  toggleViewMore = () =>{
       this.setState({
        viewCommentReply: !this.state.viewCommentReply,
      })
  }
  
  toggleStar = () =>
  {
      this.props.starComment()
      this.setState({
        starActive: !this.state.starActive,
      })
    }
  
  
    toggleLikePost = () =>{
  
    if (this.state.liked == false){
      this.setState({
        liked: !this.state.liked,
        likes: this.state.likes += 1
      })
    } else{
      this.setState({
        liked: !this.state.liked,
        likes: this.state.likes -= 1
      })
    }
  }


  likeColorChange = () => {
     if (this.state.liked == false)
     {
       return (
         <div className="combineNumber">
          <img className="interactiveButtons" src={clap} onClick={this.toggleLikePost} />
           {this.state.likes > 0 ? <p className="digit">{this.state.likes}</p> : null}
         </div>
        )
     } else
     {
       return (
         <div className="combineNumber">
          <img className="interactiveButtons" src={clap2} onClick={this.toggleLikePost} />
           <p className="digit">{this.state.likes}</p>
         </div>
       )
  }
  }   


  viewMore = () =>{
         if (this.state.viewCommentReply == false)
     {
       return (
         <div className="combineNumber">
          <img className="interactiveButtons" src={view} onClick={this.toggleViewMore} />
           {this.state.likes > 0 ? <p className="digit">{this.state.commentReplyCount}</p> : null}
         </div>
        )
     } else {
       return (
         <div className="combineNumber">
          <img className="interactiveButtons" src={view2} onClick={this.toggleViewMore} />
           <p className="digit">{this.state.commentReplyCount}</p>
         </div>
           )
         }
  }

    starActive = () =>{
         if (this.state.starActive == false)
     {
       return (
         <div className="combineNumber">
          <img className="starInteractiveButtons" src={star} onClick={this.toggleStar } />
         </div>
        )
     } else {
       return (
         <div className="combineNumber">
          <img className="starInteractiveButtons" src={star2} onClick={this.toggleStar } />
         </div>
           )
         }
  }

  render(){
    return (
      <div>
      <div className="combineNumber">
        {this.likeColorChange()}
          {this.viewMore()}
          {this.starActive()}
        <button className="replyButton" onClick={this.commentReplyTrigger}>reply</button>
        </div>
        {this.state.commentReply == true ? <ReplyCommentForm commentReplies={this.props.commentReplies} /> : null}
        {this.state.viewCommentReply == true ? <Reply commentReplies={this.props.commentReplies} /> : null}
        </div>
    );
  }
}

export default ReplyButtons;
