import React from "react";
import { _getUsers } from "../../utils/_DATA";
import "./InteractiveButtons.css";
import axios from "axios";

import CoveredComment from "../CoveredComment/CoveredComment";

import share from "./Assets/share.png";
import comment from "./Assets/comment.png";
import clap from "./Assets/clap.png";
import clap2 from "./Assets/clap2.png";

class InteractiveButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: 0,
      comments: 0,
      commentOpen: false,
      shares: 0,
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
      
  
   likeColorChange = () => {
     if (this.state.liked == false)
     {
       return (
         <div className="combineNumber">
          <img className="interactiveButtons" src={clap} onClick={this.toggleLikePost} />
           {this.state.likes > 0 ? <p className="digit">this.state.likes</p> : null}
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
          <p className="digit">1</p>
          </div>
      <div className="combineNumber">
          <img className="interactiveButtons" src={comment} onClick={this.expandComments}/>
          <p className="digit">2</p>
      </div>

        {this.likeColorChange()}
        <br/>
      </div>
        <div className="commentDrop">{this.state.commentOpen == true ? <CoveredComment /> : null}</div>
        </div>
    );
  }
}

export default InteractiveButtons;
