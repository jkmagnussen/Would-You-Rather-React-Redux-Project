import React from "react";

import "./CommentedReplyButtons.css";
import axios from "axios";

import clap from "../../../../Assets/clap.png";
import clap2 from "../../../../Assets/clap2.png";
import star from "../../../../Assets/star.png";
import star2 from "../../../../Assets/star2.png";




class CommentedReplyButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: 1,
      starActive: false
    };
  }


  componentDidMount() {
    const self = this;
  }

  toggleViewMore = () =>{
       this.setState({
        viewCommentReply: !this.state.viewCommentReply,
      })
  }
  
  toggleStar = () =>{
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
     if (this.state.liked == true)
     {
       return (
         <div className="replyCombineNumber">
          <img className="replyInteractiveButtons" src={clap2} onClick={this.toggleLikePost} />
           {this.state.likes > 0 ?
             <p className="replyDigit">{this.state.likes}</p>
             : 
             <p className="hiddenReplyDigit">{this.state.likes}</p>}
         </div>
        )
     } else
     {
       return (
         <div className="replyCombineNumber">
           <img className="replyInteractiveButtons" src={clap} onClick={this.toggleLikePost} />
                  {this.state.likes > 0 ?
             <p className="replyDigit">{this.state.likes}</p>
             : 
             <p className="hiddenReplyDigit">{this.state.likes}</p>}

         </div>
       )
  }
  }   

  starActive = () =>{
         if (this.state.starActive == false)
     {
       return (
         <div className="replyCombineNumber">
          <img className="replyInteractiveButtonsStar" src={star} onClick={this.toggleStar} />
         </div>
        )
     } else {
       return (
         <div className="replyCombineNumber">
          <img className="replyInteractiveButtonsStar" src={star2} onClick={this.toggleStar} />
         </div>
           )
         }
  }

  render(){
    return (

      <div className="replyCombineNumber">
        {this.likeColorChange()}
        {this.starActive()}
      </div>
    );
  }
}

export default CommentedReplyButtons;
