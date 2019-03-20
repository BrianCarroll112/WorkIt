import React from 'react';
import Dropzone from 'react-dropzone';
import FilesBase64 from 'react-file-base64';
import { editUser, getUser, uploadPhotoApi } from '../services/apiHelpers';

const CLOUDINARY_UPLOAD_PRESET = 'divs4zmo';
const CLOUDINARY_UPLOAD_URL = 'http://api.cloudinary.com/v1_1/di3ne3vdv/image/upload'


export default class ProfilePicture extends React.Component {
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

   getFiles(filepath) {
   this.setState({
     filepath: filepath
   });
   console.log(filepath);
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
       this.saveProfil();
     })
   }

   async handleImageUpload(file){
     let resp = await uploadPhotoApi(file);
   }

   async saveProfil(){
     const id = this.props.match.params.id;
     const token = this.props.token;
     const data = {profile_pic: this.state.uploadedFile};
     await editUser(id, data, token);
   }

   async componentDidMount(){
     const { id, token } = this.props
     const user = await getUser( id, token)
   }




  render(){
    return (
    <form>
      <div>
      <Dropzone
        onDrop={acceptedFiles => {
          this.onImageDrop(acceptedFiles);

        }}
        multiple={false}>
        {({getRootProps, getInputProps, isDragActive}) => {
          return (
            <div {...getRootProps()} >
            <input {...getInputProps()} />
              { isDragActive ?
                <p>''</p> :
                <p> Drag 'n' drop some files here, or click to select files </p>
              }
            </div>
            )
          }}
      </Dropzone>
      <img src={this.state.uploadedFile} alt=''/>
      </div>
  </form>
    )
  }
}
