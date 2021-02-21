import React from "react";
import { _getUsers } from "../../utils/_DATA";
import axios from "axios";
import "./UncoveredPosts.css"
import user from "./Assets/user.jpg";

class UncoveredPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }

  // php -S localhost:8080 -t public public/index.php

  // php server terminal command

  componentDidMount() {
    const self = this;
    
  }

  render() {
    const { users } = this.props;
    
    return (
      <div class="uncoveredPostsWrap">
        <div className="userTop">
          <img className="profileThumbnail" src={user} />
          <h3 className="userNameDisplay">User3482</h3>
          <p className="coveredPostText">This is an example of text that would fill this status/ caption section. This should be relevant to the blurred images displayed beneath to somehow incentivise a particular choice.</p>
        </div>
      </div>
    );
  }
}

export default UncoveredPosts;
