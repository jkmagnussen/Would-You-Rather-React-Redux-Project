import React from "react";

import "./Footer.css";

import github from "../Media/github.png";
import linkedIn from "../Media/linkedIn.png";
import home from "../Media/home.png";

class Footer extends React.Component {
  render() {
    return (
     <div>
        <p className="footer">© 2021 quandary | About | Contact | Privacy Policy | Cookies | Terms</p>
      </div>
    );
  }
}

export default Footer;
