import React, { Component } from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css';
import "./PostUpload.css";
import template1 from "./Assets/image1.jpg";
import template2 from "./Assets/image1.jpg";
import axios from "axios";

import AvatarImageCropper from "react-avatar-image-cropper";

// Comment 

class PostUpload extends Component {

    constructor() {
        super()
        this.state = {
            optionPicture1: null,
            optionPicture2: null,
            status: "",
            pic1Title: "",
            pic2Title: "",
        }
    }

    handleSubmit = e =>{
        e.preventDefault()
        const user = this.props.currentUser
        const formData = new FormData()
        for (const key in this.state){
            formData.append(key, this.state[key])
        }
        axios.post("/questions", formData, { headers: { "Content-Type": "multipart/form-data" } })
            .then((response) =>{console.log(response)})
    }

    statusSet = (event) =>{
        this.setState({
            status: event.target.value
        })
    }

    title1Set = (event) =>{
        this.setState({
            pic1Title: event.target.value
        })
    }

    title2Set = (event) =>{
        this.setState({
            pic2Title: event.target.value
        })
    }
    
    setFileInStateByKey = (blob, key) =>{
        const file = new File([blob], key)
        this.setState({
            [key]: file
        })
    }

    render(){
        return (
            <form className="pictureUploadForm" onSubmit={this.handleSubmit}>
                <h1 className="newPostTitle">New Post: </h1>
                <textarea className="statusInput"
                    multiline rows="4"
                    placeholder="Add a status/ desctiption"
                    value={this.state.status}
                    onChange={this.statusSet}
                />
                <div className="titlesWrap">
                    <div className="imageHolder1"> 
                        <input className="picTitle"
                            placeholder="Image Title"
                            maxlength="20"
                            value={this.state.picTitle1}
                            onChange={this.title1Set} />
                        <div className="avatarImageCropper">
                            <AvatarImageCropper onChange={(fileBlob) => this.setState({optionPicture1: fileBlob })} actions={[<button key={0}>Remove</button>]} />
                        </div>
                    </div>
                
                    <div className="imageHolder2">
                        <input className="picTitle"
                            placeholder="Image Title"
                            maxlength="20"
                            value={this.state.picTitle2}
                            onChange={this.title2Set} />
                        <div className="avatarImageCropper">
                            <AvatarImageCropper onChange={(fileBlob) => this.setState({optionPicture2: fileBlob })} actions={[<button key={0}>Remove</button>]}/>
                        </div>
                    </div>
                </div>
                    <button className="postUploadBtn">Upload</button>
                    <br/>

            </form>
        )
    }
}


export default PostUpload;