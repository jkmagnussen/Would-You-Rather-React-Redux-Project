import React, { Component, Fragment } from "react";
import ProfilePicUpload from '../ProfilePicUpload/ProfilePicUpload';
import AvatarImageCropper from "react-avatar-image-cropper";
import "./Register.css";

import axios from "axios";


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      formSubmit: false,
      avatar: null,
    };
  }



      setFileInStateByKey = (blob, key) =>{
        const file = new File([blob], key)
        this.setState({
            [key]: file
        });
    }

    handleSubmit = e => {
      e.preventDefault()
    //this.setState({ formSubmit: true })
      const formData = new FormData()
      for (const key in this.state){
          formData.append(key, this.state[key])
      }
      axios.post("/users", formData, { headers: { "Content-Type": "multipart/form-data" } })
        
        .then((response) =>
        {
          const { access_token } = response.data
          this.props.setUser(response.data);
          
            
          })
    }

  
  onFormUpdate = (event) => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div class="registerForm">
        <form className="registerContainer" onSubmit={this.handleSubmit}>

           <input

              className="registerInput"
              placeholder="Name"
            onChange={this.onFormUpdate}
            name="userName" />
    
          <br />

           <input

              className="registerInput"
              placeholder="Email"
            onChange={this.onFormUpdate}
          name="email"/>
        <br />
          <input

            className="registerInput"
            placeholder="Password"
            onChange={this.onFormUpdate}
          name="password"/>
          <br />
          <p className="imageUploadText">Optional profile picture upload:</p>

           <div className="registerAvatarImageCropper ">
              <AvatarImageCropper onChange={(fileBlob) => this.setState({avatar: fileBlob })} actions={[<button className="removeBtn" key={0}>Remove</button>]}/>
           </div>
          
          <button className="registerBtn"
            type="submit">Register</button>
        </form>
      </div>
      
    );
  }
}

export default Register;


