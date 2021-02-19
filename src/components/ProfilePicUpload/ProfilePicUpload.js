import React, { Component } from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css';

class ProfilePicUpload extends Component {

    constructor() {
        super()
        this.state = {
            src: null,
            crop: {
                unit: "%",
                width: 30,
                aspect: 1 / 1
            },
            croppedImageUrl: null,
        }
    }

handleFile = e => {
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
        this.setState({src: fileReader.result })
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

onCropChange = (crop) => {
    this.setState({ crop });
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
    
    

    render() {
        const preview = this.state.src ? <ReactCrop style={{width: "40vw", marginTop: "5%"}}src={this.state.src} alt='preview' crop={ this.state.crop} onChange={newCrop => this.onCropChange(newCrop)}/> : null
        console.log(this.state)
        return (
            <form className="pictureUploadForm"onSubmit={this.handleSubmit}>
                {preview}
                <input style={{
                    fontSize: "2vw",
                    width: "60%",
                    borderRadius: "20px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    backgroundColor: "rgba(0, 0, 0, 0.993)",
                    color: "rgb(195, 243, 252)",
                    opacity: "0.6"
                }} type='file' id='profile_pic' value={this.state.profile_pic} 
                    onChange={this.handleFile} />
                <br />
                {this.state.src != null ?

                    <button style={{
                    fontSize: "2vw",
                    fontFamily: "Galada",
                    width: "30%",
                    height: "100%",
                    marginBottom: "20px",
                    padding: 0,
                    opacity: "0.6",
                    borderRadius: "10px",
                    fontFamily: "Galada"
                    }}>Upload</button>
                    : null}

            </form>
        )
    }
}


export default ProfilePicUpload;