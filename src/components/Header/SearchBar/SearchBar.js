import React, { Component } from "react";
import axios from "axios";
import "./SearchBar.css";
import messages from "../Assets/messages.png";
import { withRouter } from 'react-router-dom';
import connections from "../Assets/connections.png";
import up from "../Assets/up.png";


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
       search: '',
    };
  }
  
  render(){
    return (
      <div className="searchBarWrap">
        <div className="searchsWrap">
          <input className="searchBar"
            placeholder="Search..."
            value={this.state.search}
            onChange={(event) => this.setState({search:event.target.value})}/>
        </div>
         <img className="searchUp " src={up} onClick={this.props.toggleSearchBar} />
      </div>
    );
  }
}

export default withRouter(SearchBar);

