import React, { Component } from 'react';
import { Dropzone, useDropzone} from 'react-dropzone';
import FilesBase64 from 'react-file-base64';
import { uploadPhotoApi } from '../services/apiHelpers';

class Cv extends Component {
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
    <form>
      <FilesBase64 multiple={false} onDone={this.getFiles.bind(this)} />
      <button type='submit' onClick={this.handleUpload}> upload </button>
    </form>
    </div>
    )
  }
};

export default Cv;
