import React from "react";
import { _getUsers } from "../../utils/_DATA";
import "./CoveredComment.css";
import user from "./Assets/user.jpg";

import view from "./Assets/look.png";
import view2 from "./Assets/look2.png";

import clap from "./Assets/clap.png";
import clap2 from "./Assets/clap2.png";

import CoveredReply from "./CoveredReply/CoveredReply";
import ReplyButtons from "./ReplyButtons/ReplyButtons";

class CoveredComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: 5,
      viewCommentReply: false,
      commentReplyCount: 3,
    };
  }

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
  
  toggleViewMore = () =>{
       if (this.state.viewCommentReply == false){
         this.setState({

        viewCommentReply: !this.state.viewCommentReply,
        commentReplyCount: this.state.commentReplyCount += 1
      })
    } else{
      this.setState({
        viewCommentReply: !this.state.viewCommentReply,
        commentReplyCount: this.state.commentReplyCount -= 1
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

  viewCommentreplyClick = () =>{
    return (
      this.setState({
        viewCommentReply: !this.state.viewCommentReply,
      })
    )
  }

  commentreply = () =>{
    return (
      this.setState({
        commentSubReply: !this.state.commentSubReply,
      })
    )
  }

  render() {
    const { users } = this.props;
    
    return (
      <div class="commentsWrap">
        <form>
          <textarea className="commentInput" multiline
            rows="4" placeholder="Add a status/ desctiption" />
        </form>
        <button className="replyButton2">Submit</button>
        <div className="replyBox">
        <div className="userTop">
          <img className="profileThumbnail" src={user} />
          <h3 className="userNameDisplay">User3482</h3>
          <p className="commentText">This is an example of text that would fill this status/ caption section. This should be relevant to the blurred images displayed beneath to somehow incentivise a particular choice.</p>
          </div>

          <ReplyButtons like={this.likeColorChange} viewMore={this.viewMore} commentReply={this.commentreply}/>
        
                  {this.state.viewCommentReply == true ? <CoveredReply />: null}
                {this.state.commentSubReply == true ?
                  <div>
                    <form>
                      <textarea className="commentInput" multiline
                        rows="4" placeholder="Add a status/ desctiption" />
                    </form>
                    <button className="replyButton2">Submit</button>
                  </div>
                  : null}
                </div>
        <br/>
      </div>
    );
  }
}

export default CoveredComment;
