import React, { Component, Fragment } from "react";
import ProfilePicUpload from '../ProfilePicUpload/ProfilePicUpload';
import AvatarImageCropper from "react-avatar-image-cropper";
import "./Register.css";


class Register extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      formSubmit: false,
      profilePic: null,
    };


    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    this.props.addUser(name, email, password);
    this.setState({ formSubmit: true })
  };

      setFileInStateByKey = (blob, key) =>{
        const file = new File([blob], key)
        this.setState({
            [key]: file
        });
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
            name="name" />
    
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
                            <AvatarImageCropper onChange={(fileBlob) => this.setState({profilepIC: fileBlob })} actions={[<button className="removeBtn" key={0}>Remove</button>]}/>
                        </div>
          
          <button className="registerBtn"
            type="submit">Register</button>
        </form>
      </div>
      
    );
  }
}

export default Register;


