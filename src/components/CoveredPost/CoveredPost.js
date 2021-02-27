import React from "react";
import { _getUsers } from "../../utils/_DATA";
import "./CoveredPost.css";
import axios from "axios";
import InteractiveButtons from "../InteractiveButtons/InteractiveButtons";
import TimerOne from "../Timer/TimerOne";
import TimerTwo from "../Timer/TimerTwo";
import user from "./Assets/user.jpg";
import image1 from "./Assets/image1.jpg";
import image2 from "./Assets/image2.jpg";

class CoveredPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      totalLikes: 6
    };
  }

  componentDidMount() {
    const self = this;
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
            <h2 className="titleOverlay">Twins throwin' Shapes</h2>
            <img className="imageCrop" src={image1} />
            <TimerOne/>
          </div>
          <div style={{ marginTop: 0, padding: 0}}>
            <h2 className='titleOverlay'>The dead don't die</h2>
            <img className="imageCrop" src={image2} />
            <TimerTwo/>
          </div>
        </div>
        <InteractiveButtons />
      </div>
    );
  }
}

export default CoveredPost;
