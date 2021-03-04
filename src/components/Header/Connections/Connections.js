import React, { Component } from "react";
import axios from "axios";
import "./Connections.css";
import messages from "../Assets/messages.png";
import { withRouter } from 'react-router-dom';
import connections from "../Assets/connections.png";
import up from "../Assets/up.png";


class Messages extends Component {
  constructor(props){
    super(props);
    this.state = {
       
    };
  }
  
  render(){
    return (
      <div className="messagesWrap">
        <div className="cogSettingsWrap">
                  <img className="connections" src={connections} onClick={this.props.toggleSettings} />
          <h2 className="settingsTitle"> Connections </h2>
        </div>
          <p className="settingsList" onClick={this.redirectToProfile}>View Profile</p>
          <p className="settingsList">Edit Profile</p>
        <p className="settingsList">Account Settings</p>
         <img className="up" src={up} onClick={this.props.toggleConnections} />
      </div>
    );
  }
}

export default withRouter(Messages);

