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
   }

   onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
     this.handleImageUpload(files[0]);
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
        onDrop={this.onImageDrop.bind(this)}
        accept="image"
        multiple={false}>

        {({getRootProps, getInputProps}) => {
          return (
            <div {...getRootProps()} >
            <input {...getInputProps()} />
              {<p>Try dropping some files here, or click to select files to upload.</p>}
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
