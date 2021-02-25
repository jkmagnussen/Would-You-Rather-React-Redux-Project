import React from "react";
import { _getUsers } from "../../utils/_DATA";
import "./InteractiveButtons.css";
import axios from "axios";

import Comment from "../Comment/CoveredComment";

import share from "./Assets/share.png";
import comment from "./Assets/comment.png";
import clap from "./Assets/clap.png";
import clap2 from "./Assets/clap2.png";
import trophy from "./Assets/trophy.png";


class InteractiveButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: 7,
      comments: 5,
      commentOpen: false,
      shares: 0,
      diamonds: 0
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

  toggleDiamondAdd = () =>{
    
      this.setState({
        diamonds: this.state.diamonds + 1
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
     } else
     {
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
          <img className="interactiveButtons" src={comment} onClick={this.expandComments} />
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




  expandComments = () =>{
    this.setState({
      commentOpen: !this.state.commentOpen,
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
          
          <div className="combineNumber">
          <img className="trophyInteractiveButton" src={trophy} />
          <p className="interactiveButtonDigit">1</p>
          </div>
          {this.likeColorChange()}
        <br/>
      </div>
        <div className="commentDrop">{this.state.commentOpen == true ? <Comment /> : null}</div>
        </div>
    );
  }
}

export default InteractiveButtons;
