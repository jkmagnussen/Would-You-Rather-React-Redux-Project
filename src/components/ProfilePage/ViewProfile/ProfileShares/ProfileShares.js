import React from "react";

import "./ProfileShares.css";
import axios from "axios";
import pic from "../../Assets/image2.jpg";
import pic2 from "../../Assets/coveredPost.png";
import CoveredPost from "../../../CoveredPost/CoveredPost";




class ProfileShares extends React.Component {
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
      <div className="profileSharesWrap">
        <CoveredPost />
        <CoveredPost />
        </div>
    );
  }
}

export default ProfileShares;
