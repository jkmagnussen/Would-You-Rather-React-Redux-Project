import React from "react";

import "./CoveredReply.css";
import axios from "axios";
import user from "../Assets/user.jpg";
import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/image2.jpg";

import share from "../Assets/share.png";
import comment from "../Assets/comment.png";
import clap from "../Assets/clap.png";
import clap2 from "../Assets/clap2.png";

import ReplyButtons from "../ReplyButtons/ReplyButtons.js";

class CoveredComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: 5,
      viewCommentReply: false,
      commentSubReply: false,
    };
    
  }

  // php -S localhost:8080 -t public public/index.php

  // php server terminal command

  componentDidMount() {
    const self = this;
    
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

  toggleAddPost = () => {
      this.setState({addPost: !this.state.addPost})
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
          <img className="interactiveButtons" src={clap2} onClick={this.likeToggle} />
           <p className="digit">{this.state.likes}</p>
         </div>
       )
  }
  }   

  viewCommentreplyClick = () =>{
    return (
      this.setState({
        viewCommentReply: !this.state.commentReply,
      })
    )
  }

  render() {
    const { users } = this.props;
    
    return (
      <div className="replyBox">
        <div className="userTop">
          <img className="profileThumbnail" src={user} />
          <h3 className="userNameDisplay">User3482</h3>
          <p className="commentText">This is an example of text that would fill this status/ caption section. This should be relevant to the blurred images displayed beneath to somehow incentivise a particular choice.</p>
        </div>
        <div>
          <div>
            <div className="buttonResultsWrap">
              <div className="combineNumber">
                {this.likeColorChange}
              </div>
              <div className="combineNumber">
                <button className="replyButton" onClick={this.onCommentreplyClick}>Reply</button>
              </div>
              <br />
            </div>
              <ReplyButtons />
        </div>
          </div>
                  </div>
                  
    );
  }
}

export default CoveredComment;
