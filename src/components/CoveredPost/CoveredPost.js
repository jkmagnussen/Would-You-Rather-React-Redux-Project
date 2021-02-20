import React from "react";
import { _getUsers } from "../../utils/_DATA";
import "./CoveredPost.css";
import axios from "axios";
import user from "./Assets/user.jpg";
import image1 from "./Assets/image1.jpg";
import image2 from "./Assets/image2.jpg";

class CoveredPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addPost: false,
    };
    
  }

  // php -S localhost:8080 -t public public/index.php

  // php server terminal command

  componentDidMount() {
    const self = this;
    
  }

  toggleAddPost = () => {
      this.setState({addPost: !this.state.addPost})
    }   

  render() {
    const { users } = this.props;
    
    return (
      <div class="coveredPostWrap">
        <div className="userTop">
          <img className="profileThumbnail" src={user} />
          <h3 className="userNameDisplay">User3482</h3>
          <p className="coveredPostText">This is an example of text that would fill this status/ caption section. This should be relevant to the blurred images displayed beneath to somehow incentivise a particular choice.</p>
        </div>
        <div className="coveredPhotoContainer">
          <div style={{marginTop: 0, padding: 0}}>
            <h2 className="titleOverlay">title1</h2>
            <img className="imageCrop" src={image1} />
          </div>
          <div style={{ marginTop: 0, padding: 0}}>
            <h2 className='titleOverlay'>title1</h2>
             <img className="imageCrop" src={image2} />
          </div>
        </div>

      </div>
    );
  }
}

export default CoveredPost;
