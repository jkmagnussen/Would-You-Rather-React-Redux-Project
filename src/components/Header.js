import React, { Component, Fragment } from "react";
import "../index.css";
import {_getUsers} from "../utils/_DATA";


// Main App

class Header extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      selectedId: null,
      users: {}
    };
  }
  
   componentDidMount() {

   }
  
  
  render() {

    return (
      <div className="headerWrap">
        <h1 className="title">quandary</h1>
      </div>
    );
  }
}

export default Header;
