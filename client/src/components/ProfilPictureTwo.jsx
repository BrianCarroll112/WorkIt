import React, { Component } from 'react';
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
