import React from "react";
import {_getUsers} from "../../utils/_DATA";
import axios from "axios";

class Dashboard extends React.Component {
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
      <div class="Dash">
        <h1>HELLO</h1>

        </div>
    );
  }
}

export default Dashboard;
