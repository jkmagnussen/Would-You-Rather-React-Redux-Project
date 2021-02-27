import React from "react";
import { _getUsers } from "../../utils/_DATA";
import "./InteractiveButtons.css";
import axios from "axios";

import CommentWrap from "./Comment/CommentWrap";

import StarComments from "./Comment/Comment/StarComments/StarComments";

import share from "./Assets/share.png";
import comment from "./Assets/comment.png";
import comment2 from "./Assets/comment2.png";
import clap from "./Assets/clap.png";
import clap2 from "./Assets/clap2.png";
import trophy from "./Assets/trophy.png";
import trophy2 from "./Assets/trophy2.png";


class InteractiveButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: 7,
      comments: 5,
      commentOpen: false,
      shares: 0,
      trophyCommentToggle: false,
      trophyComments: 3
    };
    
  }

  // php -S localhost:8080 -t public public/index.php

  // php server terminal command

  componentDidMount() {
    
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

    trophyCommentToggle = () =>{
    
      this.setState({
        trophyCommentToggle: !this.state.trophyCommentToggle,
        commentOpen: false
      })
  }
     
  
   likeColorChange = () => {
     if (this.state.liked == 0)
     {
       return (
         <div className="combineNumber">
          <img className="interactiveButtons" src={clap} onClick={this.toggleLikePost} />
           {this.state.likes == 0 ?
             <p className="transparentDigit"></p>
             : <p className="interactiveButtonDigit">{this.state.likes}</p>}
         </div>
        )
     } else {
       return (
         <div className="combineNumber">
          <img className="interactiveButtons" src={clap2} onClick={this.toggleLikePost} />
           <p className="interactiveButtonDigit">{this.state.likes}</p>
         </div>
       )
  }
  }   

    commentCount = () => {
     if (this.state.commentOpen == true){
       return (
         <div className="combineNumber">
          <img className="interactiveButtons" src={comment2} onClick={this.expandComments} />
           {this.state.comments == 0 ? <p className="transparentDigit"></p> : <p className="interactiveButtonDigit">{this.state.comments}</p>}
         </div>
        )
  
     } else
     {
       return (
         <div className="combineNumber">
           <img className="interactiveButtons" src={comment} onClick={this.expandComments} />
           {this.state.comments > 0 ? <p className="interactiveButtonDigit">{this.state.comments}</p> : <p className="transparentDigit"></p>}
         </div>
       )
    }
  }  


      trophyCommentColorOpen = () => {
     if (this.state.trophyCommentToggle == true){
       return (
          <div className="combineNumber">
            <img className="trophyInteractiveButton" src={trophy2} onClick={this.trophyCommentToggle} />
          {this.state.trophyComments == 0 ? <p className="transparentDigit"></p> : <p className="interactiveButtonDigit">{this.state.trophyComments}</p>}
          </div>
        )
  
     } else{
       return (
          <div className="combineNumber">
            <img className="trophyInteractiveButton" src={trophy} onClick={this.trophyCommentToggle} />
          {this.state.trophyComments == 0 ? <p className="transparentDigit"></p> : <p className="interactiveButtonDigit">{this.state.trophyComments}</p>}
          </div>
       )
    }
  }  


  expandComments = () =>{
    this.setState({
      commentOpen: !this.state.commentOpen,
      trophyCommentToggle: false,
    })
  }


  render() {
    const { users } = this.props;
    
    return (
      <div>
      <div className="buttonResultsWrap">
        <div className="combineNumber">
          <img className="interactiveButtons" src={share} />
          <p className="interactiveButtonDigit">1</p>
          </div>

      {this.commentCount()}
          { this.trophyCommentColorOpen()}

          {this.likeColorChange()}
        <br/>
      </div>
        <div className="commentDrop">{this.state.commentOpen == true ? <CommentWrap /> : null}
        </div>
        <div className="commentDrop">{this.state.trophyCommentToggle == true ? <StarComments /> : null}</div>
        </div>
    );
  }
}

export default InteractiveButtons;


