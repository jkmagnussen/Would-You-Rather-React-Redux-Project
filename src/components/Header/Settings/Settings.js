import React, { Component } from "react";
import axios from "axios";
import "./Settings.css";
import cog from "../Assets/cog.png";
import { withRouter } from 'react-router-dom';
import up from "../Assets/up.png";


class Settings extends Component {
  constructor(props){
    super(props);
    this.state = {
       
    };
  }
  
  render(){
    return (
      <div className="settingsWrap">
        <div className="cogSettingsWrap">
          <img className="settingsCog" src={cog} />
          <h2 className="settingsTitle"> Settings </h2>
        </div>
          <p className="settingsList" onClick={this.redirectToProfile}>View Profile</p>
          <p className="settingsList">Edit Profile</p>
          <p className="settingsList">Account Settings</p>
          <img className="up" src={up} onClick={this.props.toggleSettings} />
      </div>
    );
  }
}

export default withRouter(Settings);

