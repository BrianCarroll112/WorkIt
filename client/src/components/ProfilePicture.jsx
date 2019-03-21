import React from 'react';
import Dropzone from 'react-dropzone';
import FilesBase64 from 'react-file-base64';
import { editUser, getUser} from '../services/apiHelpers';

export default class ProfilePicture extends React.Component {
  constructor(props) {
     super(props)

     this.state = {
       filepath: '',
       uploadedFile: null,
     };
     this.onImageDrop = this.onImageDrop.bind(this)
   }

   getFiles(filepath) {
   this.setState({
     filepath: filepath
   });
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

 async saveProfil(){
     const id = await localStorage.getItem('id');
     const token = await localStorage.getItem('token');
     const data = {profile_pic: this.state.uploadedFile};
     await editUser(id, data, token);
   }

   async componentDidMount(){
     const id = await localStorage.getItem('id');
     const token = await localStorage.getItem('token');
     const user = await getUser(id, token)
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
      <img src={this.props.profile_pic ? this.props.profile_pic : this.state.uploadedFile} alt=''/>
      </div>
  </form>
    )
  }
}
