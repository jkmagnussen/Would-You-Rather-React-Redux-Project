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
            },
            croppedImageUrl1: null,
            croppedImageUrl2: null,
        }
    }

handleFile1 = e => {
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
        this.setState({src1: fileReader.result })
    }   
    fileReader.readAsDataURL(e.target.files[0])
}
    
    handleFile2 = e => {
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
        this.setState({src2: fileReader.result })
    }   
    fileReader.readAsDataURL(e.target.files[0])
}

handleSubmit = e => {
    e.preventDefault()
    const user = this.props.currentUser
    const formData = new FormData()
    console.log(this.state.croppedImage);
    //formData.append('user[id]', user.id) POST localhost:8080/api/users/1/avatar
    //formData.append('user[profile_pic]', this.state.croppedImage)

}
  
  
  onImageLoaded = image => {
    this.imageRef = image
}

onCropChange1 = (crop1) => {
    this.setState({ crop1 });
}
    
onCropChange2 = (crop2) => {
    this.setState({ crop2 });
}

onCropComplete = crop => {
    if (this.imageRef && crop.width && crop.height) {
        const croppedImageUrl = this.getCroppedImg(this.imageRef, crop)
        this.setState({ croppedImageUrl })
    }
}

getCroppedImg(image, crop) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");
    
    ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
     )

    const reader = new FileReader()
    canvas.toBlob(blob => {
        reader.readAsDataURL(blob)
        reader.onloadend = () => {
            this.dataURLtoFile(reader.result, 'cropped.jpg')
        }
    })
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
    this.setState({croppedImage: croppedImage }) 
  }
    
    

    render(){

        const preview1 = this.state.src1 ?
            <ReactCrop className="imgThumb" src={this.state.src1} alt='preview' crop={this.state.crop1} onChange={newCrop => this.onCropChange1(newCrop)} />
            :
            <div class="image-upload">
            <label for="file-input">
                <ReactCrop className="imgThumb" src={template1} alt='preview' crop={this.state.crop1} onChange={newCrop => this.onCropChange1(newCrop)} />
                </label>
                <input id="file-input" type="file" value={this.state.profile_pic} onChange={this.handleFile1}/>
            </div>
        

        const preview2 = this.state.src2 ?
            <ReactCrop className="imgThumb" src={this.state.src2} alt='preview' crop={this.state.crop2} onChange={newCrop => this.onCropChange2(newCrop)} /> 
            :
            <div class="image-upload">
            <label for="file-input">
                <ReactCrop className="imgThumb" src={template1} alt='preview' crop={this.state.crop2} onChange={newCrop => this.onCropChange2(newCrop)} />
                </label>
                <input id="file-input" type="file" value={this.state.profile_pic} onChange={this.handleFile2}/>
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
                <button className="upload">Upload</button>
            </form>
        )
    }
}


export default PostUpload;