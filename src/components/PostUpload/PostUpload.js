import React, { Component } from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css';
import "./PostUpload.css";
import template1 from "./Assets/image1.jpg";
import template2 from "./Assets/image1.jpg";

class PostUpload extends Component {

    constructor() {
        super()
        this.state = {
            src1: null,
            src2: null,
            crop1: {
                unit: "%",
                width: 40,
                height: 40,
                aspect: 1 / 1
            },
            crop2: {
                unit: "%",
                width: 40,
                height: 40,
                aspect: 1 / 1
            }
        }
    }

    handleFile = (name, file) =>{
        const fileReader = new FileReader()
        const self = this;
        fileReader.onloadend = () => {
            self.setState({
                [name]: fileReader.result
            })
            console.log(this.state);
        }   
        fileReader.readAsDataURL(file)
    }
    
    handleFile2 = e => {
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            this.setState({src2: fileReader.result })
        }   
        fileReader.readAsDataURL(e.target.files[0])
    }

    handleSubmit = e =>
    {
        e.preventDefault()
        const user = this.props.currentUser
        const formData = new FormData()
        console.log(this.state.croppedImage);
        for (const key in this.state)
        {
            if (key == "src1" || key == "src2")
            {
                console.log(this.state[key]);
                formData.append(key, this.dataURLtoFile(this.state[key], key))
            } else {
                formData.append(key, this.state[key])
            }

            
        }

        //formData.append('user[id]', user.id) POST localhost:8080/api/users/1/avatar
        //formData.append('user[profile_pic]', this.state.croppedImage)
    }

    onCropChange1 = (crop1) =>
    {
        if (this.state.src1)
        {

            this.setState({ crop1 });
            console.log(crop1);
        }
        
        //this.getCroppedImg(this.state.src1, crop1)
    }
    
    onCropChange2 = (crop2) => {
        this.setState({ crop2 });
    }

    dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), 
    n = bstr.length, 
    u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    let croppedImage = new File([u8arr], filename, {type:mime});
    return croppedImage;
  }

    render(){

        const preview1 = this.state.src1 ?
            <ReactCrop className="imgThumb" src={this.state.src1} alt='preview' crop={this.state.crop1} onChange={newCrop => this.onCropChange1(newCrop)} />
            :
            <div class="image-upload">
            <label for="file-input">
                <ReactCrop className="imgThumb" src={template1} alt='preview' crop={this.state.crop1} onChange={newCrop => this.onCropChange1(newCrop)} />
                </label>
                <input id="file-input" type="file" value={this.state.profile_pic} onChange={(event) => this.handleFile("src1", event.target.files[0]) }/>
            </div>
        

        const preview2 = this.state.src2 ?
            <ReactCrop className="imgThumb" src={this.state.src2} alt='preview' crop={this.state.crop2} onChange={newCrop => this.onCropChange2(newCrop)} /> 
            :
            <div class="image-upload">
            <label for="file-input">
                <ReactCrop className="imgThumb" src={template1} alt='preview' crop={this.state.crop2} onChange={newCrop => this.onCropChange2(newCrop)} />
                </label>
                <input id="file-input" type="file" value={this.state.profile_pic} onChange={(event) => this.handleFile("src2", event.target.files[0]) }/>
            </div>
        
        return (
            <form className="pictureUploadForm" onSubmit={this.handleSubmit}>
                <h1 className="newPostTitle">New Post: </h1>
                <textarea className="statusInput" multiline
      rows="4" placeholder="Add a status/ desctiption"/>
                <div className="titlesWrap">
                    
                    <div className="imageHolder1"> 
                        <input className="picTitle" placeholder="Title" style={{color: "rgb(195, 243, 252)"}}/>
                        {preview1}
                    </div>
                
                    <div className="imageHolder2">
                        <input className="picTitle" placeholder="Title" />
                    {preview2}
                    </div>
                </div>

                    <button className="postUploadBtn">Upload</button>
                    <br/>

            </form>
        )
    }
}


export default PostUpload;