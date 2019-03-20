import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import axios from 'axios';
import { uploadPhotoApi } from '../services/apiHelpers';

const CLOUDINARY_UPLOAD_PRESET = 'divs4zmo';
const CLOUDINARY_UPLOAD_URL = 'http://api.cloudinary.com/v1_1/di3ne3vdv/image/upload'

export default class ProfilePictureTwo extends React.Component {
  constructor(props) {
     super(props);

     this.state = {
       filepath: '',
       uploadedFile: null,
       uploadedFileCloudinaryUrl: ''
     };
     this.onImageDrop = this.onImageDrop.bind(this)
     this.handleImageUpload = this.handleImageUpload.bind(this)
   }


  getBase64(item, cb) {
     let reader = new FileReader();
     reader.readAsDataURL(item);
     reader.onload = () => cb(reader.result);
     reader.onerror = function(e) {console.log("error", e)}
   }

   onImageDrop(files) {
     this.getBase64(files[0], (result) => {
       this.setState({
         uploadedFile: result
       })
     })
   }

   async handleImageUpload(file){
     let resp = await uploadPhotoApi(file);

    this.setState({
      uploadedFileCloudinaryUrl: resp.body.secure_url
        });
      }


  render(){
    return (
    <form>
      <div>
      <Dropzone
        onDrop={acceptedFiles => {
          this.onImageDrop(acceptedFiles);
          this.handleImageUpload(this.state.uploadedFile);
        }}
        multiple={false}>

        {({getRootProps, getInputProps, isDragActive}) => {
          return (
            <div {...getRootProps()} >
            <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop the files here ...</p> :
                  <p>Drag 'n' drop some files here, or click to select files</p>
              }
            </div>
            )
          }}
      </Dropzone>
      </div>

      <div>
         {this.state.uploadedFileCloudinaryUrl === '' ? null :
         <div>
           <img src={this.state.uploadedFileCloudinaryUrl} alt=''/>
         </div>}
       </div>
  </form>
    )
  }
}
