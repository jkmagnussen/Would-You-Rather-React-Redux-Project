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
     const self = this;

     _getUsers().then(function (response){
       self.setState({
         users: response.data
       })
       console.log(self.state.users);
     })
   }
  
  
  render() {

    return (
      <div className="headerWrap">

        <h1 className="title">Would You Rather?</h1>
        <form className="formz">
          <label>
            Username: 
            <input />
          </label>
          <br />
          <br />
          <label>
            Password:   
            <input />
          </label>
        </form>
      </div>
    );
  }
}

export default Header;
