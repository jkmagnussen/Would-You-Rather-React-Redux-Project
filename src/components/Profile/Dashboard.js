import React from "react";
import { _getUsers } from "../../utils/_DATA";
import "./Dashboard.css";
import axios from "axios";
import PostUpload from "../PostUpload/PostUpload";
import CoveredPost from "../CoveredPost/CoveredPost";
import plus from "./Assets/plus.png";
import uncover from "./Assets/uncover.png";
import view from "./Assets/view.png";
import Footer from "../Footer/ExternalFooter/Footer";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addPost: false,
      seeCovered: false,
    };
    
  }

  // php -S localhost:8080 -t public public/index.php

  // php server terminal command

  componentDidMount() {
    const self = this;
    
  }

  toggleAddPost = () => {
      this.setState({addPost: !this.state.addPost})
  } 
  
  toggleCoveredPost = () => {
    this.setState({
      seeCovered: !this.state.seeCovered,
      addPost: false,
    })
    }  

  render() {
    const { users } = this.props;
    
    return (
      <div class="dashboardWrap">
        <div className="plusContainer">
          <img className="plus" src={plus} onClick={this.toggleAddPost} />
          <img className="uncover" src={uncover} onClick={this.toggleCoveredPost} />
          <img className="view" src={view} onClick={this.toggleAddPost} />
          {this.state.addPost == true ? <PostUpload /> : null}
          {this.state.seeCovered == true ?
            <div>
              <CoveredPost />
              <CoveredPost />
              <CoveredPost />
              <CoveredPost />
              <CoveredPost />
            </div> : null}

        </div>
        
<Footer />
      </div>
    );
  }
}

export default Dashboard;
