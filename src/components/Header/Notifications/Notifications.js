import React, { Component } from "react";
import axios from "axios";
import "./Notifications.css";
import notification from "../Assets/notification.png";
import up from "../Assets/up.png";
import { withRouter } from 'react-router-dom';


class Notifications extends Component {
  constructor(props){
    super(props);
    this.state = {
       
    };
  }

      redirectToProfile = () => {
   const { history } = this.props;
   if(history) history.push('/profile');
  }

  
  render(){
    return (
      <div className="notificationsWrap">
        <div className="cogSettingsWrap">
          <img className="bell" src={notification} />
          <h2 className="settingsTitle"> Notifications </h2>
        </div>
          <p className="settingsList" onClick={this.redirectToProfile}>View Profile</p>
          <p className="settingsList">Edit Profile</p>
        <p className="settingsList">Account Settings</p>
        <img className="up" src={up} onClick={this.props.toggleNotifications}/>
        </div>
    );
  }
}

export default withRouter(Notifications);

