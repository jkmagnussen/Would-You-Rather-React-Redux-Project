import React from "react";

import "./ReplyButtons.css";
import CoveredComment from "../CoveredComment";
import axios from "axios";
import user from "./Assets/user.jpg";

import view from "./Assets/look.png";
import view2 from "./Assets/look2.png";


import clap from "./Assets/clap.png";
import look from "./Assets/look.png";
import clap2 from "./Assets/clap2.png";


class ReplyButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: 5,
      viewCommentReply: false,
      commentReplyCount: 3,
    };
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

  componentDidMount() {
    const self = this;
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
     } else
     {
       return (
         <div className="combineNumber">
          <img className="interactiveButtons" src={view2} onClick={this.toggleViewMore} />
           <p className="digit">{this.state.commentReplyCount}</p>
         </div>
       )
  }
    
  }

  render()
  {
    
    return (
      <div className="combineNumber">
        {this.likeColorChange()}
        {this.viewMore()}
        <button className="replyButton" onClick={this.commentReply}>reply</button>
         </div>
    );
  }
}

export default ReplyButtons;
