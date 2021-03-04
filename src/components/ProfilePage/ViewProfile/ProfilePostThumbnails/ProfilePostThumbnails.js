import React from "react";

import "./ProfilePostThumbnails.css";
import axios from "axios";
import pic from "../../Assets/image2.jpg";
import pic2 from "../../Assets/coveredPost.png";




class ProfilePostThumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  componentDidMount() {
    const self = this;
    
  }

  render() {
    const { users } = this.props;
    
    return (
    <div className="profileThumbnailWrap">
      <div class="row">
        <div class="column">
            <img className="postThumbnail" src={pic} />
            <img className="postThumbnail" src={pic2} />
            <img className="postThumbnail" src={pic} />
            <img className="postThumbnail" src={pic} />
            <img className="postThumbnail" src={pic} />
            <img className="postThumbnail" src={pic2} />
            <img className="postThumbnail" src={pic} />
            <img className="postThumbnail" src={pic2} />
            <img className="postThumbnail" src={pic2} />
            <img className="postThumbnail" src={pic} />
            <img className="postThumbnail" src={pic2} />
            <img className="postThumbnail" src={pic} />
            <img className="postThumbnail" src={pic} />
            <img className="postThumbnail" src={pic2} />
            <img className="postThumbnail" src={pic} />
            <img className="postThumbnail" src={pic2} />

        </div>
        </div>
    </div>
    );
  }
}

export default ProfilePostThumbnails;
