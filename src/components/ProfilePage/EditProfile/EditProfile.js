import React from "react";

import "./EditProfile.css";
import axios from "axios";
import user from "../Assets/user.jpg";
import ProfileThumbnails from "../ViewProfile/ProfilePostThumbnails/ProfilePostThumbnails";
import ProfileShares from "../ViewProfile/ProfileShares/ProfileShares";



class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewUploads: true,
      viewShares: false,
      userBio: "This is ann example of text that would fill this status/ caption section. This should be relevant to the blurred images displayed beneath to somehow incentivise a particular choice."
    };
  }

  componentDidMount() {
    const self = this;
    
  }

  openUploads = () =>{
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
            <input className="editProfileUserNameDisplay" placeholder="User3482"></input>

          </div>


          <div >
        <form className="editBioContainer">
          <textarea className="editBio" multiline
            rows="4" placeholder={this.state.userBio} />
        </form>
        <button className="editProfileSuvmitBtn">ss ave</button> 
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

export default EditProfile;
