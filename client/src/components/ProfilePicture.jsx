import React, { Component } from 'react';
import { Dropzone, useDropzone} from 'react-dropzone';
import FilesBase64 from 'react-file-base64';
import { uploadPhotoApi } from '../services/apiHelpers';

class ProfilePicture extends Component {
  constructor(){
  super();
  this.state = {
      filepath: ''
    }
  }

    getFiles(filepath) {
    this.setState({
      filepath: filepath
    });
    console.log(filepath);
  }

  async handleUpload(){
    await uploadPhotoApi(this.state.filepath.base64);
  }


  render(){
    return(
    <div>
    <img src={this.state.filepath.base64} alt=''/>
    <form>
      <FilesBase64 multiple={false} onDone={this.getFiles.bind(this)} />
      <button type='submit' onClick={this.handleUpload}> upload </button>
    </form>
    </div>
    )
  }
};

export default ProfilePicture;


  /* const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    <FilesBase64 multiple={false} onDone={this.getFiles.bind(this)} />
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop}) */

/*  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  ) */
