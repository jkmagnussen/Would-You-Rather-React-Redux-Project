import React from "react";

import "./ViewProfile.css";
import axios from "axios";
import user from "../Assets/user.jpg";
import ProfileThumbnails from "./ProfilePostThumbnails/ProfilePostThumbnails";
import ProfileShares from "./ProfileShares/ProfileShares";



class ViewProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewUploads: true,
      viewShares: false
    };
  }

  componentDidMount() {
    const self = this;
    
  }

  openUploads = () =>
  {
    this.setState({
      viewUploads: true,
      viewShares: false
    })
  }

    openShares = () =>
  {
    this.setState({
      viewUploads: false,
      viewShares: true
    })
  }

  render() {
    const { users } = this.props;
    
    return (
      <div class="profilePageWrap">
        <div className="profileUserTop">
          <div className="profilePicAndName">
            <img className="profilePageThumbnail" src={user} />
          <h3 className="profileUserNameDisplay">User3482</h3>
          </div>
          <div className="profilePicAndName">
            <p className="profilePageText">This is an example of text that would fill this status/ caption section. This should be relevant to the blurred images displayed beneath to somehow incentivise a particular choice.</p>
            <button className="connectButton">Connect</button>
          </div>
        </div>

        <div className="uploadShares">
          <button className="uploadSharesButton1" onClick={this.openUploads}>Uploads</button>
          <button className="uploadSharesButton2" onClick={this.openShares}>Shares</button>
        </div>

        {this.state.viewUploads == true ? <ProfileThumbnails /> : null}
        {this.state.viewShares == true ? <ProfileShares /> : null }



           



      </div>
    );
  }
}

export default ViewProfile;
